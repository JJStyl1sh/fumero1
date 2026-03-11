import { calculadoraReducer, estadoInicial } from '@/src/calculadoraReducer';
import { BotaoSapo } from '@/src/components/BotaoSapo';
import { Visor } from '@/src/components/Visor';
import React, { useReducer } from 'react';
import { StyleSheet, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function CalculadoraScreen() {
  const [estado, dispatch] = useReducer(calculadoraReducer, estadoInicial);
  const inserir = (digito: string) => dispatch({ type: 'INSERIR_DIGITO', payload: digito });

  return (
    // Correção 1: O SafeAreaView agora recebe o estilo tela (flex: 1) para ocupar tudo
    <SafeAreaView style={styles.tela}>
      
      <View style={styles.calculadoraContainer}>
        
        {/* Correção 2: Lendo os dados do estado em vez de números fixos */}
        <Visor expressao={estado.expressao} valorAtual={estado.valorAtual} />
        
        <View style={styles.teclado}>

          <View style={styles.linha}>
            <BotaoSapo titulo="C" corFundo="#EF9A9A" onPress={() => dispatch({ type: 'LIMPAR' })} />
            <BotaoSapo titulo="CE" corFundo="#FFCC80" onPress={() => dispatch({ type: 'LIMPAR_ENTRADA'})} />
            <BotaoSapo titulo="÷" corFundo="#81C784" onPress={() => dispatch({ type: 'ESCOLHER_OPERACAO', payload: '÷'})} />
            <BotaoSapo titulo="X" corFundo="#81C784" onPress={() => dispatch({ type: 'ESCOLHER_OPERACAO', payload: 'X'})} />
          </View>

          <View style={styles.linha}>
            <BotaoSapo titulo="1" onPress={() => inserir('1')} />
            <BotaoSapo titulo="2" onPress={() => inserir('2')} />
            <BotaoSapo titulo="3" onPress={() => inserir('3')} />
            <BotaoSapo titulo="-" corFundo="#81C784" onPress={() => dispatch({ type: 'ESCOLHER_OPERACAO', payload: '-'})} />
          </View>

          <View style={styles.linha}>
            <BotaoSapo titulo="4" onPress={() => inserir('4')} />
            <BotaoSapo titulo="5" onPress={() => inserir('5')} />
            <BotaoSapo titulo="6" onPress={() => inserir('6')} />
            <BotaoSapo titulo="+" corFundo="#81C784" onPress={() => dispatch({ type: 'ESCOLHER_OPERACAO', payload: '+'})} />
          </View>

          {/* O Bloco Inferior que abraça o lado esquerdo e o lado direito */}
          <View style={styles.blocoInferior}>
            
            <View style={styles.blocoEsquerdo}>
              <View style={styles.linha}>
                <BotaoSapo titulo="7" onPress={() => inserir('7')} />
                <BotaoSapo titulo="8" onPress={() => inserir('8')} />
                <BotaoSapo titulo="9" onPress={() => inserir('9')} />
              </View>

              <View style={styles.linha}>
                <BotaoSapo titulo="0" flex={2.1} onPress={() => inserir('0')} />
                {/* Correção 3: Ponto deve usar 'inserir' */}
                <BotaoSapo titulo="." onPress={() => inserir('.')} />
              </View>
            </View> 
            
            {/* Correção 4: blocoDireito agora está DENTRO do blocoInferior, lado a lado com blocoEsquerdo */}
            <View style={styles.blocoDireito}>
                {/* Correção 5: Botão de igual usa CALCULAR em vez de ESCOLHER_OPERACAO */}
                <BotaoSapo titulo="=" corFundo="#4CAF50" onPress={() => dispatch({ type: 'CALCULAR'})} />
            </View>

          </View>

        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  tela: {
    flex: 1, // Isso garante que o fundo cubra a tela do iPhone inteira
    backgroundColor: '#333',
    justifyContent: 'center',
    padding: 16,
  },
  calculadoraContainer: {
    flex: 1,
    backgroundColor: '#E0E0E0',
    borderRadius: 24,
    overflow: 'hidden',
    elevation: 8,
  },
  teclado: {
    flex: 2,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
  },
  linha: {
    flex: 1,
    flexDirection: 'row'
  },
  blocoInferior:{
    flex:2,
    flexDirection: 'row',
  },
  blocoEsquerdo:{
    flex:3
  },
  blocoDireito: {
    flex: 1,
  },
});