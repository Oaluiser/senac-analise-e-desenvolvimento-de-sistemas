# Uma palavra é dita palíndrome quando pode ser lida nos 2 sentidos. Elabore um programa que leia
# uma palavra e informe se ela é ou não palíndrome.
# Palavra: mussum
# mussum é Palíndrome

palavra = input("Digite uma palavra: ").lower()
if palavra == palavra[::-1]:
    print(palavra + " é Palíndrome")
else:
    print(palavra + " não é Palíndrome")