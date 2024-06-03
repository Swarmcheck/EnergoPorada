# Technologie
## Development:
- React - biblioteka języka programowania JavaScript
- MUI - biblioteka komponentów do zaimplementowania 
- Javascript + Typescript - język programowania
- Node JS - język programowania
- Mongoose - biblioteka do komunikacji z bazą danych
- GoogleSpreadsheet - biblioteka do komunikacji z arkuszami google

## Środowiska:
- Kylos - hosting strony, serwer SPA oraz przekierowywanie zapytań do API
- Mongo DB - baza danych
- Azure Devops - przechowywanie kodu, pull requesty, pipeline i wysyłanie do azure portal kodu API oraz do kylos kodu SPA
- Azure Portal - przechowywanie zmiennych środowiskowych wykorzystywanych w pipeline, jak i podczas uruchamiania kodu API. Serwer API
- Google Cloud Platform - bot do komunikacji z API arkusza google

# Dokumentacja
## Opis ogólny
EnergoPorada to model diagnozowania ubóstwa energetycznego na poziomie lokalnym zawarty w badawczo-edukacyjnej aplikacji przeglądarkowej połączonej z bazą danych gotową na przekazywanie danych do arkusza kalkulacyjnego.

Domena strony energoporada.pl jest środowiskiem produkcyjnym usługi, z którego mogą korzystać wszyscy. Dodatkowo założono poddomenę test.energoporada.pl wyświetlającą kod środowiska testowego, która umożliwia użytkownikom wewnętrznym wyświetlanie i zatwierdzanie zmian przed przesłaniem na środowisko produkcyjne. 
Do wizualizacji komponentów użyto biblioteki do języka programowania - React, zaś do przesyłania danych pobieranych ze strony energoporada.pl do bazy danych użyty został język Node JS. Kod z komputera lokalnego przesyłany jest na platformę Microsoft Azure, która przechowuje wszystkie wersje kodu i umożliwia przetwarzanie go w taki sposób, aby przesłać go do Kylos.

Na stronie zamieszczona została ankieta pobierająca informacje od użytkowników metodą odpowiadania na pytania, podstrona z artykułami oraz opisami programów związanych z ocieplaniem oraz smogiem. Utworzono podstronę zawierającą graf argumentacyjny umożliwiający dodawanie i odczytywanie argumentów.

Całość strony dostosowano do obsługi na najczęściej wykorzystywanych urządzeniach. Zadbano o responsywność strony względem różnych wymiarów ekranu i formy interakcji użytkownika z urządzeniem (w skład których wchodzą: klawiatura, myszka, ekran dotykowy). Strona została zaprojektowana tak, by możliwe było intuicyjne przejście całego procesu wypełniania ankiety przy użyciu tylko myszki i ekranu dotykowego lub klawiatury. Tym samym daje to możliwość bezproblemowego korzystania z usługi osobom używającym czytników ekranu. Osiągnięto to dzięki zastosowaniu elementów udostępnionych przez MUI, będącą zbiorem złożonych materiałów wykorzystywanych przy tworzeniu stron internetowych, co pozwoliło na szybsze tworzenie dostosowanej dla końcowego użytkownika usługi.

Aplikacja zbiera informacje udzielone przez użytkowników w formularzu oraz dane dotyczące zachowań użytkowników w aplikacji, takie jak: czas, jaki respondent przeznaczył na każde pytanie oraz sumaryczny czas przeznaczony na wypełnienie ankiety. Następnie wyselekcjonowane informacje przesyłane są do bazy danych, jaką jest arkusz Google Sheet. Dane poddawane są obróbce za pomocą funkcji oferowanych przez firmę Google, w wyniku czego czytający ma możliwość odczytania odpowiedzi podanych przez użytkowników aplikacji w sposób intuicyjny. Na ich podstawie opracowywana jest również wizualizacja globalnych statystyk. Aby umożliwić aplikacji przesyłanie odpowiedzi i wartości czasowych do arkusza, posłużono się narzędziem udostępnionym przez usługę Google API, przy pomocy którego wygenerowane zostały unikatowe klucze dostępu do arkusza. W związku z tym strona energoporada.pl jest w stanie przekazywać zawartość bez udziału osób trzecich, dzięki czemu dostęp do ww. informacji mają jedynie osoby posiadające link. 

## Kylos
Domena strony energoporada.pl oraz api.energoporada.pl została zakupiona na platformie Kylos oferującej hosting domen.

Strona energoporada.pl przechowuje kod wizualizujący stronę oraz jej komponenty, który jest odbierany z usługi wcześniej interpretującej kod na docelowy wykorzystywany przy wyświetlaniu strony przez przeglądarkę.Strona api.energoporada.pl zaś jedynie przekierowywuje do wcześniej podpiętego serwera API, który obsługuje kod wysłany z innej usługi do tego wyznaczonej.

Wyżej wymienione adresy odnoszą się do produkcyjnego środowiska strony dostępnego dla każdego użytkownika na internecie posiadającego link, docelowo przeznaczony dla mieszkańców Rybnika. Dodatkowo istnieją adresy dla środowisk testowych test.energoporada.pl oraz api-test.energoporada.pl, przeznaczone docelowo dla osób testujących i pracowników wewnętrznych, lecz dostępne dla każdego posiadającego link.

## Azure Devops
Usługa przechowująca kod dla strony testowej (test.energoporada.pl) oraz dla strony produkcyjnej przeznaczonej dla użytkowników zewnętrznych (energoporada.pl)i  wraz z adekwatnymi dla nich różnymi wersjami kodu programistycznego oraz z historią zmian w nim. Dzięki Pipelines oraz Releases przerabia ona kod napisany w języku React na odpowiedni dla danego serwera docelowego (Pipelines - SPA do Kylos, Releases - API do Azure Portal), który potem jest obsługiwany przez następną z usług.

Azure Devops umożliwia też tworzenie zadań i śledzenie postępu pracy, jak i recenzję nowych fragmentów kodu wśród zespołu programistycznego.

W Pipelines i Releases są też przechowywane prywatne klucze nadawane podczas “budowania” kodu z jednego języka w drugi. Klucze te odnoszą się od usług potrzebnych w SPA (link do adresu API).

## Azure Portal
Centrum umożliwiające kontrolowanie i zarządzanie posiadanymi aplikacjami. Na jego serwerach postawiono serwery API testowe i produkcyjne, do których Kylos przekierowywuje odpowiednio zapytania wysyłane przez SPA. Tutaj są też przechowywane wszystkie prywatne klucze do usług takich jak MongoDB czy Google Cloud Platform.

## Mongo DB
Mongo DB jest systemem zarządzania bazą danych, przy pomocy, którego można wykupić serwer przechowujący obiekty w bazie, jak i odpowiadający za wysyłanie, edytowanie oraz przyjmowanie ich z API.

Obecnie na Mongo DB jest postawiona baza testowa, jak i produkcyjna, obie przechowujące obiekty wysyłane co jakiś czas z strony api.energoporada.pl i api-test.energoporada.pl przy pomocy biblioteki Mongoose przeznaczonej do komunikacji z konkretną bazą danych. Klucz do bazy przechowywany jest w API projektu, który został przypisany w Azure Portal, odpowiednio ukryty przed nieuprawnionym dostępem.

## Google Cloud Platform
Pakiet usług przetwarzania w chmurze, który oferuje stworzenie indywidualnego bota pod konkretny projekt, nadając mu odpowiednie uprawnienia i klucze, dzięki czemu możliwe jest odczytywanie, edytowanie i dodawanie wierszy w wskazanym przez użytkownika arkuszu google. Klucz ten raz wygenerowany został przeniesiony w odpowiednie miejsce, przechowujące klucze dla API projektu w Azure Portal, gdyż jest on wymagany aby dokonywać działań na arkuszu.

# Instalacja
Do uruchomienia programu jest potrzebne zainstalowanie biblioteki React w danym środowisku programistycznym wraz z npm, umożliwiającym pobranie potrzebnych bibliotek, zainstalowanie ich oraz uruchomienie wbudowanych komend w konsoli.

**Poniższe działania trzeba zrobić osobno dla folderów /SPIForm/SPI.SPA i /SPIForm/SPI.API zawartych w załączonej paczce z kodem.**

Uruchomić poniższy kod w wskazanych wyżej ścieżkach
```
npm install
npm start
```

Dzięki temu npm zainstaluje wszystkie potrzebne paczki opierając się na wytycznych w pliku package.json po czym uruchomi przeglądarkę z kodem programu przy pomocy skryptu start.

# Buildy
## SPI.SPA
Dla buildów zostały przygotowane trzy skrypty:
npm build - uruchamia build w oparciu o zmienne w pliku .env
npm build:test - uruchamia build w oparciu o zmienne w pliku .env.test
npm build:prod - uruchamia build w oparciu o zmienne w pliku .env.prod

Każdy z wyżej przedstawionych plików zawiera te same zmienne, które, w zależności od wywoływanego skryptu build zostaną zaaplikowane odpowiednio w odpowiednie miejsca w kodzie.

.env dla SPIForm/SPI.SPA
```
REACT_APP_URL - przechowuje adres strony wyświetlającej zawartość wizualną (SPA)
REACT_APP_API - przechowuje adres strony obsługującej zapytania z SPA do bazy danych i z powrotem, oraz dokonującej potrzebnych obliczeń (API)
REACT_APP_BUILD_VERSION - zmienna niewykorzystywana nigdzie w SPA
REACT_APP_ENV - zmienna niewykorzystywana nigdzie w SPA
```

## SPI.API
Dla buildów został przygotowany jeden skrypt:
npm build - uruchamia build w oparciu o zmienne w pliku .env przy użyciu kompilatora tsc

.env dla SPIForm/SPI.API
```
PORT - przechowuje port adresu lokalnego strony
REACT_APP_URL - przechowuje adres strony wyświetlającej zawartość wizualną (SPA)
MONGODBURL - adres bazy danych, pozyskiwany w panelu MONGODB podczas tworzenia konta z odpowiednimi uprawnieniami do bazy, złożony z loginu i hasła do tego konta
SPREADSHEET_ID - indywidualny klucz przypisany arkuszowi online Google. Pozyskiwane w panelu Google Cloud Platform
GOOGLE_CLIENT_EMAIL - email bota, który ma przyznane odpowiednie uprawnienia do odczytu i edycji wskazanego arkusza. Pozyskiwane w panelu Google Cloud Platform
GOOGLE_SERVICE_PRIVATE_KEY - klucz indywidualny przyznany danemu projektowi w Google Cloud Platform, umożliwiający dostęp do wskazanego arkusza. Pozyskiwane w panelu Google Cloud Platform
```

# Propozycje rozwoju usługi
## Korzyści aktualne:
- Zapamiętywanie formularza i odpowiedzi w nim udzielonych w bazie danych wraz z każdym przejściem do następnego pytania, dzięki czemu możliwe jest powrócenie do własnego formularza po uprzednim wyłączeniu strony lub zamknięciu przeglądarki.
- Wynik końcowy obliczany na podstawie odpowiedzi respondentów. Obliczane są one poprzez porównanie odpowiedzi ankiety z wymaganiami programów dotacyjnych.
- Różnorodność form odpowiedzi przygotowanych graficznie w stylu minimalistycznym.
- Czytelne ostrzeżenia pojawiające się powyżej pytania, informujące o błędzie (np. nieudzielenie żadnej odpowiedzi i próba przejścia dalej) oraz zaznaczanie odpowiednich elementów na stronie (np. zaznaczenie pola, w którym powinna znaleźć się odpowiedź).
- Pomijanie lub wyświetlanie niektórych pytań zależnie od udzielonych wcześniej odpowiedzi.
- Pasek postępu wyświetlający aktualny stopień uzupełnienia ankiety.
- Gratyfikacja w postaci “przerywnika” między pytaniami, który informuje użytkownika o postępie i korzyści, jakie może zyskać kontynuując wypełnianie formularza.

## Korzyści przyszłe:
- Przy pomocy odpowiednio zaprojektowanych modułów jest możliwe zaimplementowanie na stronie w pełni zautomatyzowanego narzędzia pozwalającego na tworzenie ścieżki użytkownika (np. dodawanie nowych pytań w formularzu) bez potrzebnej ingerencji programisty.
- Komponent oferujący sprawniejsze uzupełnianie formularza bez konieczności uzupełniania wszystkich odpowiedzi po kolei w celu otrzymania listy programów dotacyjnych dostępnych dla danej osoby, w imieniu której jest ankieta przez urzędnika wypełniana (możliwość wyboru kolejności odpowiedzi na pytania, pomijania niektórych pytań)
- Generowanie listy z odpowiedziami podanymi przez respondentów (możliwe też do pobrania w pliku .xls) wraz z opartymi na nich statystykami bezpośrednio na stronie w odpowiedniej to tego zakładce zamiast w Google Spreadsheet.

## Planowane zmiany:
- Zaimplementowanie funkcji tworzącej kopię zapasową bazy danych co określony przedział czasu (np. codziennie o 8 rano) i magazynującej ją w bezpiecznym miejscu.
- Dodanie większej ilości gratyfikacji w formularzu, aby użytkownik czuł wkład własny w pomoc miastu oraz był bardziej świadomy korzyści, które sam otrzymuje.
- Zmiana sposobu wysyłania danych z aplikacji do excela. Obecnie konieczny jest dodatkowy, uruchamiany ręcznie program, który naprawia błąd występujący podczas transferu danych przy dwóch rodzajach pytań.
- Napisanie w Excelu funkcji za pomocą App Script, które będą obliczały dane bez potrzeby rozpisywania złożonych funkcji excelowych
- Naprawa blokujących się w specyficznych sytuacjach przycisków, podczas korzystania z aplikacji na telefonie.
- Zmiana walidacji wpisywanego tekstu, w taki sposób,aby nie wymagała wielu obliczeń po stronie usługi i nie utrudniała płynnego wpisywania.
- Poprawa działania kursora w polach własnej odpowiedzi, w taki sposób, aby przy próbie edycji słowa z początku kursor nie przeskakiwał na koniec pola.
- Poprawa wyświetlania się przycisków i animacji po ich kliknięciu.
- Dopisanie wielkości fontów na tablety i telefony.
- Poprawa układu grafiki z ludzikiem na stronie głównej.
- Poprawa zawijania się długich linków na iOS Chrome, aby nie wystawały poza zawinięty blok tekstu.
- Nadpisanie wyglądu listy rozwijanej na zgodny z stylem przewidzianym w projekcie graficznym.
- Poprawa wyświetlania listy przysługujących programów dotacyjnych po przejściu formularza zgodnie z przygotowaną uprzednio makietą graficzną.
- Naprawa "wiszących spójników" tak, aby pojedyncze litery lub dwuliterowe słowa znajdujące się na końcu wiersza były one przenoszone na początek następnej linijki tekstu.
- Rozpisanie dokładnej dokumentacji technicznej odnośnie funkcji i komponentów wykorzystywanych w kodzie.
