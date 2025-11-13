Crição de um Pipeline em Gihub Actions do projeto-fullstack
HOOK/FUNCIONALIDADE REACT A SER IMPLEMENTADA: useReducer
API JSON: exchange API -- https://www.exchangerate-api.com
Link do repositório para o Deployment https://github.com/msimonae/engwebdevops
Aluno : Marcelo Massashi Simonae
Link da aplicação atualizada pelo Deploy para testes : https://msimonae.github.io/engwebdevops/
O pipeline deve primeiro rodar os testes. Se algum teste falhar, o pipeline para, e o site não é publicado (deployado). Isso garante que você nunca envie código com bugs para a produção.(Atualizado em 13/11/2025)
Foi adicikonado os comandos abaixo:
      - name: Run unit tests
        run: npm test -- --watchAll=false
      # Usamos --watchAll=false para o Jest (testador do React)
      # rodar os testes uma vez e sair, em vez de ficar "assistindo".
