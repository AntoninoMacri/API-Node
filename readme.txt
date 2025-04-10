Per  far funzionare l'eseguibile:
-Dentro la cartella CSV inserire il file .csv rinominato in: CFD.csv
-eseguire lo script CreaTabellaCaricaCSV_Definitivo.exe (dx esegui o doppio click o avvia)

NOTA: serve la possibilità di accedere al DB dal dispositivo.


PER LA TABELLA TabellaRecapiti_CFD
-per    vedere l'SQL della tabella: dx sulla tabella > Script > CREATE Script
-Per creare una nuova tabella: dx sulla tabella > Query tool > incollare il codice della tabella e premere sul tasto ">" Execute script


CONNESSIONI DB
#Sviluppo
#DATABASE_URL = "postgresql://pgadmin:yeste=R4fr8@127.0.0.1:5432/postgis_21_Veneto"
# Se vuoi usare il server remoto:
#WEB
#DATABASE_URL = "postgresql://pgadmin:yeste=R4fr8@172.20.20.75:5432/postgis_21_Veneto"


CODICE PER LA CREAZIONE DELLA TABELLA a mano
--modificare la data di aggiornamento e CONSTRAINT "2025_03_enti_pkey" PRIMARY KEY (id) con il mese e l'anno correnti o con valori non usati precedentemente):
-- Table: cfd.TabellaRecapiti_CFD_2

-- DROP TABLE IF EXISTS cfd."TabellaRecapiti_CFD_2";

CREATE TABLE IF NOT EXISTS cfd."TabellaRecapiti_CFD_2"
(
    id integer NOT NULL DEFAULT nextval('cfd."2019_enti_id_seq"'::regclass),
    "idRecapito" character varying COLLATE pg_catalog."default",
    "idEnte" character varying COLLATE pg_catalog."default",
    "TipoRecapito" character varying COLLATE pg_catalog."default",
    "Recapito" character varying COLLATE pg_catalog."default",
    "Note" character varying COLLATE pg_catalog."default",
    "RecapitoPrincipale" character varying COLLATE pg_catalog."default",
    "CodServer" character varying COLLATE pg_catalog."default",
    "DataAgg" character varying COLLATE pg_catalog."default",
    "NProt" character varying COLLATE pg_catalog."default",
    "DataProt" character varying COLLATE pg_catalog."default",
    "TItolo" character varying COLLATE pg_catalog."default",
    "Cognome" character varying COLLATE pg_catalog."default",
    "Nome" character varying COLLATE pg_catalog."default",
    "RuoloTxt" character varying COLLATE pg_catalog."default",
    "DataBackup" character varying COLLATE pg_catalog."default",
    "Ruolo" character varying COLLATE pg_catalog."default",
    CONSTRAINT "2024_09_enti_pkey" PRIMARY KEY (id)
)
WITH (
    OIDS = FALSE
)
TABLESPACE pg_default;
