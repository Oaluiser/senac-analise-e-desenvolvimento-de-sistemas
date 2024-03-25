#  Elaborar um programa que leia uma palavra. Exiba a letra inicial (e suas ocorrências) e "_" nas demais
# posições, conforme o exemplo.
# Palavra: Abacaxi
# Descubra: A _ A _ A _ _

palavra = input("Digite uma palavra: ").upper()
primeiraLetra = palavra[0]

for i in palavra:
    if i == primeiraLetra:
        print(i, end=" ")
    else:
        print("_", end=" ")