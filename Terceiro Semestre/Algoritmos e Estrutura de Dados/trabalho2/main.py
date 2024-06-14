def agruparEListar():
    clubes = {}
    with open(
        "/Users/oaluiser/Documents/GitHub/senac-analise-e-desenvolvimento-de-sistemas/Terceiro Semestre/Algoritmos e Estrutura de Dados/trabalho2/top250-00-19.csv",
        "r",
    ) as arquivo:
        next(arquivo)
        for linha in arquivo:
            linha = linha.strip().split(",")
            linha[5] = linha[5].replace('"', "")
            if linha[5] in clubes:
                clubes[linha[5]] += 1
            else:
                clubes[linha[5]] = 1

    clubes = sorted(clubes.items(), key=lambda x: x[1], reverse=True)
    for i in range(10):
        print(clubes[i])


def classificarEListar():
    jogadores = []
    with open(
        "/Users/oaluiser/Documents/GitHub/senac-analise-e-desenvolvimento-de-sistemas/Terceiro Semestre/Algoritmos e Estrutura de Dados/trabalho2/top250-00-19.csv",
        "r",
    ) as arquivo:
        next(arquivo)
        for linha in arquivo:
            linha = linha.strip().split(",")
            linha[0] = linha[0].replace('"', "")
            if linha[9] != "NA":
                nome = linha[0]
                valor = int(linha[9])
                jogadores.append([nome, valor])

    jogadores = sorted(jogadores, key=lambda x: x[1], reverse=True)
    for i in range(10):
        print(jogadores[i])


def pesquisarPorNome():
    jogador = input("Digite o nome do jogador: ")

    with open(
        "/Users/oaluiser/Documents/GitHub/senac-analise-e-desenvolvimento-de-sistemas/Terceiro Semestre/Algoritmos e Estrutura de Dados/trabalho2/top250-00-19.csv",
        "r",
    ) as arquivo:
        next(arquivo)
        for linha in arquivo:
            linha = linha.strip().split(",")
            linha[0] = linha[0].replace('"', "")
            if linha[0].lower() == jogador.lower():
                print(linha)
                break
        else:
            print("Jogador não encontrado")


def agruparPorIdade():
    idades = {}
    with open(
        "/Users/oaluiser/Documents/GitHub/senac-analise-e-desenvolvimento-de-sistemas/Terceiro Semestre/Algoritmos e Estrutura de Dados/trabalho2/top250-00-19.csv",
        "r",
    ) as arquivo:
        next(arquivo)
        for linha in arquivo:
            linha = linha.strip().split(",")
            linha[2] = linha[2].replace('"', "")
            if linha[2] in idades:
                idades[linha[2]] += 1
            else:
                idades[linha[2]] = 1

    idades = sorted(idades.items(), key=lambda x: x[0])
    for idade in idades:
        print(idade)


def lerClube():
    clube = input("Digite o nome do clube: ")
    jogadores = []
    with open(
        "/Users/oaluiser/Documents/GitHub/senac-analise-e-desenvolvimento-de-sistemas/Terceiro Semestre/Algoritmos e Estrutura de Dados/trabalho2/top250-00-19.csv",
        "r",
    ) as arquivo:
        next(arquivo)
        for linha in arquivo:
            linha = linha.strip().split(",")
            linha[5] = linha[5].replace('"', "")
            if linha[5].lower() == clube.lower():
                nome = linha[0].replace('"', "")
                idade = int(linha[2])
                jogadores.append([nome, idade])
                print([nome, idade])

    if len(jogadores) == 0:
        print("Clube não encontrado")
        return

    media = sum([jogador[1] for jogador in jogadores]) / len(jogadores)
    print(f"Média das idades: {media}")


while True:
    print(
        "1 - Agrupar por clube comprador e listar os 10 clubes com maior número de compras"
    )
    print("2 - Classificar por valor de compra e listar as 10 maiores transações")
    print("3 - Pesquisar por nome do jogador")
    print("4 - Agrupar os jogadores por idade")
    print("5 - Ler um clube")
    print("6 - Sair")

    opcao = int(input("Digite a opção desejada: "))

    if opcao == 1:
        agruparEListar()
    if opcao == 2:
        classificarEListar()
    if opcao == 3:
        pesquisarPorNome()
    if opcao == 4:
        agruparPorIdade()
    if opcao == 5:
        lerClube()
    if opcao == 6:
        break
