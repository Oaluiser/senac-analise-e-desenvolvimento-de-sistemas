# 1. Elaborar um programa que exiba inicialmente o menu inicial apresentado a seguir:
# 1. Incluir Compra
# 2. Listar Compras
# 3. Listar Compras em Ordem
# 4. Excluir Compra
# 5. Finalizar
# O programa deve ler descrição e valor de cada compra, armazenando os dados em 2 listas distintas.

if __name__ == '__main__':
    compras = []
    valores = []
    while True:
        print('1. Incluir Compra')
        print('2. Listar Compras')
        print('3. Listar Compras em Ordem')
        print('4. Excluir Compra')
        print('5. Finalizar')
        opcao = int(input('Digite a opção desejada: '))
        if opcao == 1:
            compra = input('Digite a descrição da compra: ')
            valor = float(input('Digite o valor da compra: '))
            compras.append(compra)
            valores.append(valor)
        elif opcao == 2:
            for i in range(len(compras)):
                print(f'{compras[i]} - R$ {valores[i]}')
        elif opcao == 3:
            comprasOrdenadas = compras.copy()
            comprasOrdenadas.sort()
            for compra in comprasOrdenadas:
                indice = compras.index(compra)
                print(f'{compra} - R$ {valores[indice]}')
        elif opcao == 4:
            compra = input('Digite a descrição da compra a ser excluída: ')
            if compra in compras:
                indice = compras.index(compra)
                compras.pop(indice)
                valores.pop(indice)
            else:
                print('Compra não encontrada')
        elif opcao == 5:
            break
        else:
            print('Opção inválida')
        print()
    print('Programa finalizado')