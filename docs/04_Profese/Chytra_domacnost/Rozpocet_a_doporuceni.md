# Chytrá domácnost - rozpočet a doporučení

**Projekt:** Dům Liberec (Donská 868, Vratislavice nad Nisou)
**Datum:** červenec 2026
**Stav:** koncept, čeká se na posouzení tepelného čerpadla elektrikářem/topenářem

---

## Zvolená architektura

**Loxone zamítnuto** - uzavřený ekosystém, integrátorem instalovaný, vendor lock-in. Nesedí na požadavek "nepotřebuju vše v jedné appce, chci si to případně dodělat sám/s AI".

**Zvoleno:** Home Assistant (lokální hub) + Shelly moduly (relé/stmívače za vypínači) + Aqara senzory (Zigbee/Matter, na baterky).

Důvody:

- Shelly Gen4 běží nativně na Matter, funguje současně s Home Assistant, Apple Home, Google Home i Alexou bez cloudu
- Žádný vendor lock - jednotlivá zařízení lze později přeskládat i bez centrálního hubu
- Instalace za stávající vypínače, fyzické ovládání zůstává funkční i bez appky/wifi
- Otevřené API, snadno rozšiřitelné vlastní automatizací (AI-friendly)

**Riziko k ověření:** tepelné čerpadlo (cca 30 let staré, vrt) nemá žádné API. Reálně půjde nejspíš jen o zapínání/vypínání přes relé napojené na stávající ovládací obvod, ne o plnohodnotné programy. **Nutné nechat posoudit elektrikářem/topenářem přímo u řídící jednotky, než se cokoliv objednává.**

---

## Rozpočet - materiál (orientační ceny, ověřit před nákupem)

### Základ (jednorázově)

| Položka | Ks | Cena/ks | Celkem |
|---|---|---|---|
| Home Assistant hub (Raspberry Pi 5 + case, nebo HA Green) | 1 | ~3 500 Kč | 3 500 Kč |
| Matter/Thread border router (jen pokud Shelly moduly samy nepokryjí síť) | 1 | ~1 500 Kč | 1 500 Kč |
| **Mezisoučet** | | | **~5 000 Kč** |

### 1.PP - garáž + vjezd

| Položka | Ks | Cena/ks | Celkem |
|---|---|---|---|
| Shelly relé - garážová vrata | 1 | ~600 Kč | 600 Kč |
| Shelly relé - plotová vrata | 1 | ~600 Kč | 600 Kč |
| Kamera (Reolink, lokální NVR, bez cloud předplatného) | 1 | ~2 200 Kč | 2 200 Kč |
| **Mezisoučet** | | | **~3 400 Kč** |

### 1.PP - prádelna/technická místnost

| Položka | Ks | Cena/ks | Celkem |
|---|---|---|---|
| Shelly Flood - senzor úniku vody (pod pračku/sušičku) | 1 | ~550 Kč | 550 Kč |
| Shelly Plug - měřená zásuvka (sušička) | 1 | ~600 Kč | 600 Kč |
| **Mezisoučet** | | | **~1 150 Kč** |

### Tepelné čerpadlo - TBD

Cena zatím neurčena, čeká se na fyzické posouzení řídící jednotky. Orientačně 1 000-5 000 Kč podle toho, zda stačí jednoduché relé, nebo je nutný dodatečný řídicí modul.

### 1.NP - obývák + jídelna + kuchyň (scény)

| Položka | Ks | Cena/ks | Celkem |
|---|---|---|---|
| Shelly Dimmer Gen4 (za vypínač, na okruhy osvětlení) | 6 | ~1 300 Kč | 7 800 Kč |
| Shelly 2PM Gen4 (rolety - kuchyň terasa, obývák okna) | 3 | ~1 000 Kč | 3 000 Kč |
| **Mezisoučet** | | | **~10 800 Kč** |

### Zádveří + chodby (1.PP, 1.NP, podkroví)

| Položka | Ks | Cena/ks | Celkem |
|---|---|---|---|
| Aqara pohybový senzor | 3 | ~500 Kč | 1 500 Kč |
| Shelly relé pro noční osvětlení | 3 | ~600 Kč | 1 800 Kč |
| **Mezisoučet** | | | **~3 300 Kč** |

### Koupelny (1.NP + podkroví)

| Položka | Ks | Cena/ks | Celkem |
|---|---|---|---|
| Aqara pohybový senzor | 2 | ~500 Kč | 1 000 Kč |
| Shelly relé | 2 | ~600 Kč | 1 200 Kč |
| **Mezisoučet** | | | **~2 200 Kč** |

### Zabezpečení

| Položka | Ks | Cena/ks | Celkem |
|---|---|---|---|
| Video zvonek (Aqara G4) | 1 | ~3 300 Kč | 3 300 Kč |
| Kamera vchodové dveře | 1 | ~2 200 Kč | 2 200 Kč |
| Kontaktní senzor okno/dveře | 6 | ~500 Kč | 3 000 Kč |
| Kouřové/CO čidlo (kotelna, sauna, u krbu) | 3 | ~800 Kč | 2 400 Kč |
| **Mezisoučet** | | | **~10 900 Kč** |

---

## Celkem

| | Součet |
|---|---|
| Základní rozpočet (garáž, TČ relé, osvětlení, chodby, koupelny, zabezpečení) | ~37 000-38 000 Kč |
| Doplňková doporučení (UPS, síť, měřená zásuvka, zámek, dešťový senzor) | ~9 300 Kč |
| **Celkem materiál (bez tepelného čerpadla, bez montáže)** | **~46 000-47 000 Kč** |
| Celkem bez chytrého zámku | ~42 000-42 500 Kč |

Montáž se neúčtuje zvlášť - protože se elektrika stejně kompletně předělává, měl by ji zvládnout stejný elektrikář, co dělá rozvody. Klíčové je, aby o smart modulech věděl **předem** a nechal v krabicích pod vypínači dostatek prostoru. Výjimka je měřená zásuvka na hlavní jistič - tu musí zapojit přímo v rozvaděči, o tom je potřeba elektrikáře informovat zvlášť.

---

## Doplňková doporučení (nad rámec původního zadání)

| Položka | Co je potřeba | Ks | Cena/ks | Celkem |
|---|---|---|---|---|
| UPS pro Home Assistant hub + router | Malá UPS (např. APC Back-UPS 500VA), umístit vedle hubu/routeru, jen zapojit | 1 | ~1 500 Kč | 1 500 Kč |
| Extra ethernet zásuvky (technická místnost, obývák, případně podkroví) | CAT6 kabeláž + keystone zásuvky, zaústit do patch panelu/switche - nechat natáhnout při rozvodech elektriky | 3 | ~400 Kč | 1 200 Kč |
| Měřená zásuvka na hlavní jistič/TČ | Shelly Pro EM (proudový snímač na hlavní přívod), montáž v rozvaděči - musí dělat elektrikář | 1 | ~1 400 Kč | 1 400 Kč |
| Chytrý zámek na vchodové dveře | Nuki Smart Lock nebo obdoba, kompatibilita s eurocylindrem dveří - ověřit u zámečníka/dodavatele dveří | 1 | ~4 500 Kč | 4 500 Kč |
| Dešťový/teplotní senzor pro rolety | Aqara venkovní senzor (teplota/vlhkost), napojení na už plánované Shelly 2PM moduly - žádný extra hardware na roletách | 1 | ~700 Kč | 700 Kč |
| **Mezisoučet (doplňková doporučení)** | | | | **~9 300 Kč** |

Poznámka: chytrý zámek je jediná položka, kde bych se ptal "chci/nechci" - je to skoro polovina této sekce. Bez zámku vychází doplňkový rozpočet na ~4 800 Kč.

---

## Otevřené body

1. Posouzení tepelného čerpadla elektrikářem/topenářem - určuje reálnou cenu i rozsah integrace.
2. Finální seznam pro zadání elektrikáři (rozvody + umístění modulů v krabicích).
3. Rozhodnutí o chytrém zámku (ano/ne).
