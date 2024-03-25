# 2. Elabore um programa de implemente um
# jogo de Craps, conforme descrição a seguir: O
# jogador lança um par de dados (2 números
# aleatórios entre 1 e 6), obtendo um valor entre
# 2 e 12. Se, na primeira jogada, você tirar 7 ou
# 11, você tirou um "natural" e ganhou. Se você
# tirar 2, 3 ou 12 na primeira jogada, isto é
# chamado de "Craps" e você perdeu. Se, na
# primeira jogada, você fizer um 4, 5, 6, 8, 9 ou
# 10, este é o seu "Ponto". Seu objetivo agora é
# continuar jogando os dados até tirar este
# número novamente. Você perde, no entanto, se tirar um 7 antes de tirar este "Ponto" novamente.

import random

def jogar_dados():
    return random.randint(1, 6) + random.randint(1, 6)

if __name__ == '__main__':
    jogando = True
    while jogando:
        print('Jogando dados...')
        resultado = jogar_dados()
        print(f'Resultado: {resultado}')
        if resultado in (7, 11):
            print('Natural! Você ganhou!')
        elif resultado in (2, 3, 12):
            print('Craps! Você perdeu!')
        else:
            print(f'Ponto: {resultado}')
            jogando_ponto = True
            while jogando_ponto:
                print('Jogando dados...')
                novo_resultado = jogar_dados()
                print(f'Resultado: {novo_resultado}')
                if novo_resultado == resultado:
                    print('Você ganhou!')
                    jogando_ponto = False
                elif novo_resultado == 7:
                    print('Você perdeu!')
                    jogando_ponto = False
        jogar_novamente = input('Deseja jogar novamente? (s/n) ')
        if jogar_novamente.lower() != 's':
            jogando = False
    print('Fim do jogo')