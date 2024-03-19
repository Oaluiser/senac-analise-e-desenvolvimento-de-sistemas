# Elaborar um programa que leia o nome completo de um aluno. Valide o nome para que seja composto.
# Exiba apenas o primeiro nome do aluno em letras maiúsculas.
# Nome Completo: Maria
# Ops... Por favor, digite o nome completo
# Nome Completo: Maria dos Santos
# Nome no Crachá: MARIA

nome = input("Digite o nome completo: ")

if " " in nome:
    print("Nome no Crachá: " + nome.split()[0].upper())
else:
    print("Ops... Por favor, digite o nome completo")