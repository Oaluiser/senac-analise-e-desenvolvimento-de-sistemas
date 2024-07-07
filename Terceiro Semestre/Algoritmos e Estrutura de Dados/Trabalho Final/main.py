import matplotlib.pyplot as plt
import requests
import os

BASE_URL = "http://localhost:3000/"
token = ""
userId = ""


def clearConsole():
    os.system("cls" if os.name == "nt" else "clear")


def displayMenu():
    print("1. Login")
    print("2. Lista de Livros")
    print("3. Criar Livro")
    print("4. Atualizar Livro")
    print("5. Deletar Livro")
    print("6. Grafico de criação e atualização de livros")
    print("0. Sair")
    choice = input("Escolha uma opção: ")
    return choice


def login():
    global token, userId
    email = input("Digite seu email: ")
    senha = input("Digite sua senha: ")
    response = requests.post(BASE_URL + "login", json={"email": email, "senha": senha})
    if response.status_code == 200:
        print("Login efetuado com sucesso.")
        token = response.json()["token"]
        userId = response.json()["id"]

        print(f"Token: {token}")
        print(f"Id: {userId}")
    else:
        print("Erro ao efetuar login.")


def listBooks():
    response = requests.get(BASE_URL + "livros")
    print("Lista de Livros:")
    for book in response.json():
        print(
            f"Cod: {book['id']} | {book['titulo']} - {book['autor']}, {book['preco']}"
        )
    print()


def createBook():
    global userId, token

    if token == "":
        return print("Você precisa estar logado para criar um livro.")

    titulo = input("Titulo: ")
    autor = input("Autor: ")
    paginas = input("Paginas: ")
    preco = input("Preço: ")

    response = requests.post(
        BASE_URL + "livros",
        json={
            "titulo": titulo,
            "autor": autor,
            "paginas": int(paginas),
            "preco": float(preco),
            "usuarioId": userId,
        },
        headers={"Authorization": f"Bearer {token}"},
    )
    if response.status_code == 201:
        print("Livro criado com sucesso.")
    else:
        print(response.json())
        print("Erro ao criar livro.")


def updateBook():
    global userId, token

    if token == "":
        return print("Você precisa estar logado para atualizar um livro.")

    listBooks()
    bookId = input("Digite o código do livro que deseja atualizar: ")
    titulo = input("Titulo: ")
    autor = input("Autor: ")
    paginas = input("Paginas: ")
    preco = input("Preço: ")

    try:
        paginas = int(paginas)
    except ValueError:
        return print("Paginas deve ser um número inteiro.")

    try:
        preco = float(preco)
    except ValueError:
        return print("Preço deve ser um número.")

    response = requests.put(
        BASE_URL + f"livros/{bookId}",
        json={
            "titulo": titulo,
            "autor": autor,
            "paginas": paginas,
            "preco": preco,
            "usuarioId": userId,
        },
        headers={"Authorization": f"Bearer {token}"},
    )
    if response.status_code == 200:
        print("Livro atualizado com sucesso.")
    else:
        print(response.json())
        print("Erro ao atualizar livro.")


def deleteBook():
    global token

    if token == "":
        return print("Você precisa estar logado para deletar um livro.")

    listBooks()
    bookId = input("Digite o código do livro que deseja deletar: ")

    response = requests.delete(
        BASE_URL + f"livros/{bookId}",
        headers={"Authorization": f"Bearer {token}"},
    )
    if response.status_code == 200:
        print("Livro deletado com sucesso.")
    else:
        print(response.json())
        print("Erro ao deletar livro.")


def logsGraph():
    response = requests.get(BASE_URL + "logs")
    print("Logs:")
    descriptions_count = {
        "Livro atualizado": 0,
        "Tentativa de Acesso Inválida": 0,
        "Livro criado": 0,
    }
    for log in response.json():
        if log["descricao"] in descriptions_count:
            descriptions_count[log["descricao"]] += 1

    descriptions = list(descriptions_count.keys())
    counts = list(descriptions_count.values())

    plt.figure(figsize=(10, 6))
    plt.bar(descriptions, counts, color=["blue", "orange", "green"])
    plt.xlabel("Descrição")
    plt.ylabel("Número de Aparições")
    plt.title("Comparação do Número de Aparições dos Logs")
    plt.xticks()
    plt.show()


while True:
    userChoice = displayMenu()
    if userChoice == "1":
        clearConsole()
        login()
    elif userChoice == "2":
        clearConsole()
        listBooks()
    elif userChoice == "3":
        clearConsole()
        createBook()
    elif userChoice == "4":
        clearConsole()
        updateBook()
    elif userChoice == "5":
        clearConsole()
        deleteBook()
    elif userChoice == "6":
        clearConsole()
        logsGraph()

    elif userChoice == "0":
        print("Saindo...")
        break
    else:
        print("Opção inválida. Por favor, escolha novamente.")
