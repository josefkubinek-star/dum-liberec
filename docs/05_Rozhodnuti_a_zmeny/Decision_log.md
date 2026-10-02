## Rozhodnutí

---

### CHYTRÁ DOMÁCNOST – FINÁLNÍ ZADÁNÍ PRO NACENĚNÍ

* Datum: 2. 10. 2026
* Rozhodnutí: Chytrá domácnost (Home Assistant + Shelly + Aqara) byla rozpracována do podoby zadání pro nacenění a stala se pátým listem v dokumentu se seznamem úprav pro stavební firmu
* Důvod: Materiál a montáž chytré domácnosti má nacenit stejný elektrikář, který dělá kompletní rozvody – potřebuje konkrétní položkový seznam s počty kusů, ne jen interní poznámky
* Detail: Zachována architektura bez Loxone (otevřený lokální systém, žádný vendor lock-in). Seznam je rozdělený podle umístění (základ systému, garáž+vjezd, prádelna, tepelné čerpadlo, obývák/jídelna/kuchyně, rolety, chodby/schodiště, koupelny, zabezpečení, doplňková doporučení). Ethernet (CAT6/RJ45) zásuvky nejsou v seznamu jako nová položka – jsou už součástí elektro dokumentace (legenda RJ45 na výkresech 1.NP a 2.NP), zde se jen ověřuje jejich pokrytí. Senzor pro automatické stahování rolet byl rozšířen o detekci větru, nejen deště/teploty – konkrétní model čidla je potřeba ještě vybrat
* Dopad: Nahrazuje dosavadní interní rozpočtový dokument chytré domácnosti (z července 2026) jako primární podklad pro poptávku u elektrikáře

---

### ROLETY/ŽALUZIE – ROZŠÍŘENO NA PODKROVÍ

* Datum: 2. 10. 2026
* Rozhodnutí: Motorizované ovládání rolet (Shelly 2PM) se instaluje nejen v 1.NP (kuchyň/terasa, obývák, jídelna), ale i v podkroví (ložnice rodičů, dětský pokoj, pracovna) – celkem 6 jednotek místo původních 3
* Důvod: Rolety na oknech jsou požadovány v celém domě, ne jen v přízemí
* Detail: Počet kusů pro podkroví je zatím orientační – je potřeba ověřit skutečný počet a typ motorizovaných rolet/žaluzií u jednotlivých místností
* Dopad: Zvyšuje rozpočet chytré domácnosti o cca 3 000 Kč oproti původnímu odhadu

---

### POHYBOVÉ SENZORY A AMBIENTNÍ OSVĚTLENÍ – JEN CHODBY A SCHODIŠTĚ

* Datum: 2. 10. 2026
* Rozhodnutí: Pohybové senzory Aqara se instalují pouze v chodbách a na schodišti ve všech podlažích (ne v koupelnách ani v jednotlivých místnostech). V chodbách a na schodišti navíc přibývá nízko umístěné ambientní LED osvětlení v úrovni nohou, spínané pohybovým senzorem jako noční orientační osvětlení
* Důvod: V jednotlivých místnostech (ložnice, pokoje, obývák, koupelny) senzory pohybu nejsou potřeba, stačí klasické spínání světla přes Shelly relé
* Detail: Ambientní osvětlení vyžaduje přívod kabeláže v úrovni podlahy/soklu – nutno koordinovat s elektrikářem při hrubých rozvodech, konkrétní svítidla zatím nejsou vybraná
* Dopad: Z koupelen byly odebrány 2 ks pohybových senzorů, přidána nová položka s otevřenou cenou (ambientní osvětlení, cena dle výběru svítidel)

---

### KONTAKTNÍ SENZORY NA VŠECHNA OKNA A DVEŘE

* Datum: 2. 10. 2026
* Rozhodnutí: Kontaktní senzory okno/dveře se instalují na všechna okna a dveře v domě, ne jen na vybraných 6 kusů jako v původním rozpočtu
* Důvod: Investor chce zabezpečení pokrývající celý objekt
* Detail: Přesný počet kusů bude odvozen z finálního seznamu oken a dveří ve všech podlažích – půjde o podstatně více než původních 6 ks
* Dopad: Výrazně zvyšuje položku zabezpečení v rozpočtu chytré domácnosti, přesná částka zatím není určena

---

### CHYTRÝ ZÁMEK NA VCHODOVÉ DVEŘE – ZAMÍTNUTO

* Datum: 2. 10. 2026
* Rozhodnutí: Chytrý zámek na vchodové dveře (Nuki nebo obdoba) se nebude instalovat
* Důvod: Investor se rozhodl tuto položku z rozsahu vyřadit
* Detail: —
* Dopad: Snižuje rozpočet chytré domácnosti o cca 4 500 Kč, odpadá nutnost řešit kompatibilitu zámku s eurocylindrem nových vchodových dveří

---

### VÝMĚNA OKEN A DVEŘÍ VE VŠECH MÍSTNOSTECH
- Datum: 2026-09-27
- Rozhodnutí: Okna a dveře se vymění ve všech místnostech domu, kde se vyskytují – napříč 1.PP, 1.NP i podkrovím
- Důvod: Sjednocení rozsahu rekonstrukce, aby stavební firma nacenila kompletní výměnu bez mezer mezi jednotlivými podklady po podlažích
- Detail: V 1.PP se okna nevyskytují v suterénní hale, sauně a komoře pod schodištěm, jinde jsou zahrnuta (garáž, sklep, kotelna, umývárna, chodba+schodiště). V 1.NP a v podkroví jsou okna a dveře doplněny do všech místností, kde jsou dle skutečného stavu
- Dopad: Rozšiřuje rozsah oproti dřívějšímu předpokladu, že výměna oken/dveří je řešena jako samostatný projekt mimo tuto rekonstrukci

---

### 1.PP – KOTELNA, SAUNA, UMÝVÁRNA
- Datum: 2026-09-27
- Rozhodnutí: Kotel na tuhá paliva se v kotelně zlikviduje a otvory do komína se zaslepí, tepelné čerpadlo zůstává jediným zdrojem vytápění. Uhelna se přestaví na saunu s využitím stávajícího skluzu pro uhlí jako větracího kanálu. V umývárně se odstraní příčka vlevo od sprchy a stávající vana, vznikne nová sprcha a příprava pro pračku/sušičku s dřezem
- Důvod: Uhelný kotel je vzhledem k tepelnému čerpadlu nepotřebný. Skluz pro uhlí lze prakticky využít k odvětrání sauny bez nutnosti bourání. Umývárna potřebuje modernizaci sanitárního vybavení
- Detail: Skluz pro uhlí se nebourá, zůstává jako větrací kanál. Podlahy v 1.PP budou vinylové ve všech místnostech kromě garáže (tam zůstává betonová mazanina s nátěrem)
- Dopad: Definuje rozsah bouracích a řemeslných prací v 1.PP pro poptávku u stavebních firem. Otevřená otázka: vhodnost vinylové podlahy v umývárně (mokrý provoz)

---

### 1.NP – ZÁDVEŘÍ, OBÝVACÍ POKOJ, KOUPELNA, JÍDELNA, KUCHYNĚ
- Datum: 2026-09-27
- Rozhodnutí: Zádveří a malá koupelna (soc. zázemí) se rozšíří do prostoru bývalé chodby. Do obývacího pokoje vznikne nový vstup s velkými prosklenými dveřmi pro prosvětlení. V jídelně se odstraní dřevěné podhledy stropu (odkryje se bílý strop), odhalí se stropní trámy a odstraní se boční obložení schodiště kvůli budoucí knihovně. Venkovní dveře z kuchyně na terasu se rozšíří na dvoukřídlé provedení (jedno křídlo užší, otevíratelné dle potřeby)
- Důvod: Zlepšení dispozice a prosvětlení hlavního obytného prostoru, příprava na budoucí mobiliář (knihovna u schodů)
- Detail: Betonový stupínek v obývacím pokoji zůstává zachován a musí být po dokončené statické sondě znovu zakryt. Stávající dřevěné obložení stěny s topením (u TV) se zachovává a jen revitalizuje. Dřevěné schody do 2.NP zůstávají, jen se zabrousí a nalakují, s novým skleněným zábradlím
- Dopad: Několik položek zůstává otevřených – materiál/vzhled odhalených trámů v jídelně, šířka vestavěné skříně v zádveří (závisí na uložení stropních nosníků) a rozsah úprav venkovního schodiště

---

### 2.NP / PODKROVÍ – CHODBA, PŮDNÍ VLEZ, BALKON
- Datum: 2026-09-27
- Rozhodnutí: Místnost 2.01 je v pasportu chybně označena jako "kuchyně" – ve skutečnosti jde o chodbu 2.NP. Podlaha v chodbě i ve všech obytných místnostech podkroví (mimo koupelnu) je potvrzena jako parketová. Otvor pro vlez na půdu se rozšíří souběžně s výměnou žebříku za skládací schody. Balkon se povrchově revitalizuje a vymění se zábradlí
- Důvod: Oprava nepřesnosti v původním zaměření stávajícího stavu; nový vlez musí odpovídat rozměrům skládacích schodů
- Detail: —
- Dopad: Upřesňuje popisky místností v podkladu pro nacenění tak, aby odpovídaly realitě, ne jen zaměření

---

### SEZNAM ÚPRAV PRO NACENĚNÍ – NOVÝ DOKUMENT
- Datum: 2026-09-27
- Rozhodnutí: Vznikl podrobný seznam stavebních a řemeslných úprav po místnostech pro všechna tři podlaží (1.PP, 1.NP, 2.NP) jako podklad pro poptávku u stavebních firem
- Důvod: Stavební firmy potřebují strukturovaný rozpad prací po místnostech pro nacenění
- Detail: Dokument ve formátu Excel se 4 listy (Úvod, 1.PP, 1.NP, 2.NP), místnosti číslovány dle zaměření stávajícího stavu (pasport 04/2026, Ing. Radim Hladký), ne dle nové dispozice
- Dopad: Otevřené body v dokumentu (trámy v jídelně, skříň v zádveří, venkovní schodiště, fasáda) je potřeba doladit před rozesláním stavebním firmám

---

### PŘEKLAD MEZI KUCHYNÍ A JÍDELNOU (1.04/1.06)
- Datum: 2026-09-05
- Rozhodnutí: Otvor bude nesen překladem 2× IPE 180 na sloupcích 2× Jäkl 100×100×4, patní plech min. 160×300×6 mm
- Důvod: Potvrzeno statickým výpočtem Ing. Alexandra Šruta (KASTA)
- Detail: Přesný postup montáže (sloupky → IPE z jedné strany → IPE z druhé strany → teprve bourání) musí dostat stavební firma jako závazný postup
- Dopad: Definuje realizační postup, nedodržení pořadí ohrožuje stabilitu stropu při bourání

---

### PŘEKLAD MEZI OBÝVÁKEM A PŘEDSÍNÍ (1.05/1.03) – PODMÍNĚNO SONDOU
- Datum: 2026-09-05
- Rozhodnutí: Před bouráním otvoru musí proběhnout sonda k ověření, zda příčka nese strop
- Důvod: Statik nemá jistotu o funkci příčky, viz statický výpočet KASTA
- Detail: Pokud sonda potvrdí stropní trám → 2× UPE 65 + dočasné podepření stropu z obou stran před bouráním; pokud ne → bourání bez dočasné podpory
- Dopad: Otevřená položka — nelze zadat stavební firmě do rozpočtu, dokud sonda neproběhne

---

### MALÉ PŘEKLADY U 1.06 A SCHODIŠTĚ
- Datum: 2026-09-05
- Rozhodnutí: Rozšíření vstupu do 1.06 (terasa) řešeno překladem 3× IPE 100, okna na schodiště překladem 3× L 60×60×6 (nebo 3× UPE 50)
- Důvod: Potvrzeno statickým výpočtem KASTA, malá rozpětí (1,5 m a 60 cm)
- Detail: Standardní řešení, bez zvláštních nároků na postup
- Dopad: Žádný — lze rovnou předat do poptávky stavební firmě

---

### ZJIŠTĚNÍ: STROP JE ŽELEZOBETON, NE OCEL
- Datum: 2026-09-05
- Rozhodnutí: Aktualizovat předpoklad o konstrukci stropu — dříve zvažovaný skrytý ocelový nosník sondou nepotvrzen, strop se jeví jako ŽB konstrukce
- Důvod: Sondování provedené v rámci statického výpočtu KASTA
- Detail: Nosné pilíře nesené stropním nosníkem nad 1.PP zůstávají zachovány, definitivní ověření až při realizaci
- Dopad: Mění vstupní předpoklad pro další statické úvahy v této části domu

---

### SAUNA – UMÍSTĚNÍ V BÝVALÉ UHELNĚ
- Datum: 2026-08-19
- Rozhodnutí: Sauna bude v prostoru bývalé uhelny.
- Detail: Výklenek navíc oproti zaměření se nedozdívá — využije se jako prodloužení lavice nebo jako přirozená tepelná vrstva. Starý shoz na uhlí se zachovává jako potenciální trasa pro odtah/vzduchotechniku sauny, konkrétní řešení se upřesní podle typu kamen a požadavků na větrání.
- Dopad: Odpočívárna před saunou se ruší (prostor nestačí) — funkce omezena na odložení ručníků/županů. Odpočinková část se přesouvá do centrální místnosti.

---

### CENTRÁLNÍ MÍSTNOST – TECHNICKÁ ČÁST A SPRCHA
- Datum: 2026-08-19
- Rozhodnutí: Vedle sprchy vznikne technická část s pračkou a sušičkou nad sebou, technickým umyvadlem a úložným prostorem na prací prostředky. Stávající sprchový kout zůstává a bude zrevitalizován.
- Detail: Stávající poloha příčky mezi sprchou a technickou částí pravděpodobně vyhoví, případně mírný posun podle rozměrů spotřebičů/umyvadla/sprchy. Krátká příčka vpravo od schodů se odstraňuje.
- Dopad: Centrální místnost přebírá i roli odpočívárny k sauně.

---

### PODLAHA CENTRÁLNÍ MÍSTNOSTI – VINYL (doporučeno, čeká na potvrzení)
- Datum: 2026-08-19
- Rozhodnutí: Doporučen vinyl (SPC/rigid core) místo dlažby.
- Důvod: Voděodolný, teplejší na dotek než dlažba, snese vlhko od sprchy a prádelny, prostor působí víc "obytně". Riziko: při trvale vyšší vlhkosti bez dobrého větrání může časem trpět na spojích — v tom případě záložní varianta je dlažba s dekorem dřeva.

---

### TERASA – POSUN ZA ROH DOMU
- Datum: 2026-08-19
- Rozhodnutí: Terasa nebude přímo u výstupu z kuchyně, ale za rohem směrem do zahrady.
- Důvod: Více soukromí, lepší oslunění (od poledne postupně do večera).

---

### GARÁŽ – ORIENTACE SVĚTEL
- Datum: 2026-08-19
- Rozhodnutí: Světla v garáži budou otočena podélně vzhledem k výsuvným garážovým vratům.

---

### Pasport stavby dokončen
- Datum: 2026-04
- Rozhodnutí: Pasport stavby byl zpracován a autorizován.
- Detail: Zpracovatel Ing. Radim Hladký, autorizace Ing. Radomír Hladký (ČKAIT 0501145), dle vyhlášky č. 131/2024 Sb.
- Zastavěná plocha 98,43 m², užitná plocha 210,78 m², 1.PP + 1.NP + podkroví.
- Dům postaven pravděpodobně v 70. letech.

---

### Design architekta potvrzen – verze 12. 6. 2026
- Datum: 2026-06-12
- Rozhodnutí: Vizualizace a půdorysy od Ing. Pražákové z 12. 6. 2026 jsou aktuální design.
- Potvrzeno: krb v rohu + úložný prostor na dřevo, bar pult s barovými stoličkami, kuchyňský ostrov s tmavou deskou, herringbone parket v celém main living area, modro-tyrkysová dlažba v koupelně (1.NP), kombinace dřevěných + světlých frontiček.

---

### Balkon – renovace místo odstranění
- Datum: 2026-06
- Rozhodnutí: Balkon orientovaný do ulice **nebude odstraněn**, bude **renovován**.
- Důvod: náklady na renovaci jsou srovnatelné s odstraněním; zachování balkonu dává větší smysl z hlediska budoucího využití.
- Dopad: nutné zahrnout do projektové dokumentace, statické posouzení balkonu.

---

### Vstup do domu – zůstává na stávajícím místě
- Datum: 2026-06
- Rozhodnutí: Hlavní vstup **nebude přesunut**. Zůstává na původním místě (z ulice).
- Důvod: přesun vstupu by znamenal rozsáhlý stavební zásah bez dostatečného přínosu.
- Dopad: dispozice 1.NP se mění pouze v rámci interéru, bez změny vstupní sekvence.

---

### Stěna za krbem – nenosná, bude odstraněna
- Datum: 2026-01-17
- Rozhodnutí: Stěna za krbem (v kuchyni, tvořící zadní stěnu krbového tělesa) **není nosná** a bude odstraněna.
- Důvod: sonda ze zadní strany potvrdila, že jde o umělou přístavbu pro krb, nikoliv nosnou zeď. Statik to formálně potvrdí v rámci statického posouzení.
- Dopad: umožňuje otevření dispozice 1.NP směrem ke krbovému prostoru.

---

### Schod v obývacím pokoji – zanecháme
- Datum: 2026-01-17
- Rozhodnutí: Betonový schod v obývacím pokoji **zůstane zachován**.
- Důvod: sonda odhalila, že je celý vylitý betonem (3 vrstvy: 2× beton, 1× stěrka). Odstranění by bylo technicky i finančně náročné bez adekvátního přínosu.
- Dopad: zachování stávající výškové úrovně v obývacím pokoji.

---

### Celkový charakter domu
- Datum: 2025-08-25
- Rozhodnutí: Světlejší a prostorově otevřenější dům.
- Důvod: stávající dům působí tmavě a uzavřeně.
- Dopad: otevření dispozic, práce se světlem, jednoduchá nepřeplácaná řešení.

---

## Otevřené body

### OTEVŘENO – DĚTSKÝ POKOJ / PRACOVNA V PODKROVÍ
- Detail: Čeká se na variantu od architektky: dětský pokoj do druhého pokoje (ne původně navrženého), pracovna/pokoj pro hosty do pokoje u balkonu, v obou vestavěné skříně dle zákresu.

### OTEVŘENO – KOUPELNA V PODKROVÍ
- Detail: Preference walk-in sprcha, náhradní varianta rohová vana + sprcha od obvodové zdi. Čeká se na prostorové posouzení od architektky.

### K OVĚŘENÍ – VODA A ODPADY
- Detail: Není záznam o konkrétních problematických svodech/vedeních. Ověřit u Hladkého/architektky před rozvody.
