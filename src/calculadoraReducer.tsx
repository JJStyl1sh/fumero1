import Decimal from 'decimal.js';

export interface EstadoCalculadora {
  valorAtual: string;
  valorAnterior: string | null;
  operador: string | null;
  expressao: string; 
}

export const estadoInicial: EstadoCalculadora = {
  valorAtual: '0',
  valorAnterior: null,
  operador: null,
  expressao: '',
};

export type AcaoCalculadora =
  | { type: 'INSERIR_DIGITO'; payload: string }
  | { type: 'ESCOLHER_OPERACAO'; payload: string }
  | { type: 'LIMPAR' }          // Botão C
  | { type: 'LIMPAR_ENTRADA' }  // Botão CE
  | { type: 'CALCULAR' };       // Botão =

export function calculadoraReducer(estado: EstadoCalculadora, acao: AcaoCalculadora): EstadoCalculadora {
  switch (acao.type) {
    
    case 'INSERIR_DIGITO':
      if (acao.payload === '.' && estado.valorAtual.includes('.')) {
        return estado;
      }
      const novoValor = (estado.valorAtual === '0' && acao.payload !== '.') 
        ? acao.payload 
        : estado.valorAtual + acao.payload;

      return { ...estado, valorAtual: novoValor };

    case 'LIMPAR':
      return estadoInicial;

    case 'LIMPAR_ENTRADA':
      return { ...estado, valorAtual: '0' };

    // Deixo as operações e o cálculo para implementarmos a seguir,
    // mas a estrutura base já cá está.
    case 'ESCOLHER_OPERACAO':
      if(estado.valorAtual === 'Erro') return estado;

      return{
        ...estado,
        operador: acao.payload,
        valorAnterior: estado.valorAtual,
        valorAtual: '0',
        expressao: `${estado.valorAtual} ${acao.payload}`
      }

    case 'CALCULAR':
      if(!estado.operador || !estado.valorAnterior || estado.valorAtual === 'Erro'){
        return estado;
      }

      try{
            const num1 =  new Decimal(estado.valorAnterior);
            const num2 = new Decimal(estado.valorAtual);
            let resultado = new Decimal(0);

            switch (estado.operador){
                case '+':
                    resultado = num1.plus(num2);
                    break;
                case '-':
                    resultado = num1.minus(num2);
                    break;
                case 'X':
                    resultado = num1.times(num2);
                    break;
                case '÷':
                    if(num2.isZero()){
                        return{
                            ...estadoInicial,
                            valorAtual: 'Erro',
                            expressao: `${estado.valorAnterior} ÷ 0 =`
                        }
                    } 
                    resultado = num1.dividedBy(num2);
                    break;   
            }

            return{
                valorAtual: resultado.toString(),
                valorAnterior: null,
                operador: null,
                expressao: `${estado.valorAnterior} ${estado.operador} ${estado.valorAtual} =`
            }
        } catch(error){
            return {...estadoInicial, valorAtual: 'Erro'};
        }
    } 
}