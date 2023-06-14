# Traccia n1

SNACK 1

Il Grande Gatsby ci ha chiesto di creare i segnaposto per il tavolo degli invitati alla sua mega festa vip. Ci ha lasciato il nome del tavolo ("Tavolo Vip") e la lista degli invitati in ordine di posto:

[ 'Brad Pitt', 'Johnny Depp', 'Lady Gaga', 'Cristiano Ronaldo', 'Georgina Rodriguez', 'Chiara Ferragni', 'Fedez', 'George Clooney', 'Amal Clooney', 'Maneskin']

Ma la tipografia per stampare il tutto vuole che le mandiamo una lista di ospiti in cui ogni ospite sia un oggetto javascript che ha come attributi: nome del tavolo, nome dell'ospite e posto occupato.
Generiamo e stampiamo in console la lista per i segnaposto.

# Traccia n2

SNACK 2
Abbiamo un elenco degli studenti di una facoltà, identificati da id, Nome e somma totale dei loro voti di esame...
Per preparare l'aula di un nuovo corso, dobbiamo svolgere una serie di operazioni

1. Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70
   2.Dobbiamo creare una lista di tutti gli studenti che hanno un totale di voti superiore a 70 e id superiore a 120

2. dobbiamo stampare le targhe col nome degli studenti: creare una lista contenente il loro nome tutto in maiuscolo ES (Marco della Rovere => MARCO DELLA ROVERE);
   Questo è l'elenco degli studenti:

Id Name Grades
213 Marco della Rovere 78
110 Paola Cortellessa 96
250 Andrea Mantegna 48
145 Gaia Borromini 74
196 Luigi Grimaldello 68
102 Piero della Francesca 50
120 Francesca da Polenta 84

<br>
<br>
<br>
<br>

## Steps 1 exercise

1. Creo un Array vuoto
1. Creo un ciclo forEach(element index)
   - Al Array creato al punto primo vado a pushare un oggetto nel quale andrò ad inserire
     - nome: element
     - posto: index
     - tavolo: 'Tavolo Vip'
1. Faccio il console log della variabile al punto 1

<br>
<br>
<br>
<br>

## Steps exercise 2

1. Creo l'Array con un object per ogni persona
1. Usando il metodo .filter filtro in base al voto
1. Usando il metodo .filter filtro in base al voto e id
1. Uso il metodo map creare un Array con i nomi degli studenti
1. Creo una variabile che andro a riempire con i nomi in maiuscolo
1. creo un ciclo for each per andare a modificare i nomi in maiuscolo

<br>
<br>
<br>
<br>

# Snack Giorno 14/06/2023

## Esercizio 1

Creare un array di oggetti:
Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: name e weight.
Stampare in console la bici con peso minore utilizzando il destructuring

## Steps

1. Creo l'Array
1. Mi creo una variabile d'appoggio con numero infinito
1. Creo un ciclo for each
   - Creo una condizione
   - Se la weight e inferiore alla variabile d'appoggio le scambio
1. Creo una variabile d'appoggio
1. Creo un cilo for Each
   - Vado a controllare se la weight e uguale alla weight nella variabile al punto 2 inserisco l'oggetto nella variabile al punto 4
