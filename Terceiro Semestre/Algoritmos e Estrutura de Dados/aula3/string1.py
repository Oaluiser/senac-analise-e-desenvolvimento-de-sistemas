# Elaborar um programa que leia uma senha e informe se ela é válida ou não. Para ser válida a senha
# deve conter letras maiúsculas, minúsculas e números. Além disso, a senha deve possuir entre 8 e 12
# caracteres.
# Senha: abracadabra
# Senha Inválida

senha = input("Digite a senha: ")
maiuscula = False
minuscula = False
numero = False
tamanho = False

if len(senha) >= 8 and len(senha) <= 12:
    tamanho = True

for i in senha:
    if i.isupper():
        maiuscula = True
    elif i.islower():
        minuscula = True
    elif i.isdigit():
        numero = True

if maiuscula and minuscula and numero and tamanho:
    print("Senha Válida")
else:
    print("Senha Inválida")