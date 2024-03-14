# Anonymt Forslagsboks System

## Om Prosjektet

Dette prosjektet er en enkel webapplikasjon designet for å la ansatte sende inn anonyme forslag for å forbedre arbeidsmiljøet. HR-personell kan logge inn for å se og behandle disse forslagene.

## Teknologier

- **Frontend:** React
- **Backend:** Express.js på Node.js
- **Autentisering:** Enkel brukerrollebasert tilgangskontroll
- **Database:** Forslag lagres midlertidig i serverens minne (ikke persistent)

## Funksjoner

- Ansatte kan:
  - Send inn anonyme forslag.
- HR-personell kan:
  - Logge inn for å se alle innsendte forslag.
  - Logge ut.

## Forutsetninger

- Node.js og npm er installert på systemet ditt.

## Installasjon

1. **Klon Repositoriet:**
```
git clone https://github.com/DevrMichael/client.git
cd suggestion-box
```

2. **Sett opp Backend:**

Gå installer nødvendige avhengigheter i rotmappen:
```
npm install
```

Start serveren:
```
npm start
```

3. **Sett opp Frontend:**

Åpne en ny terminal. Gå til klientmappen fra roten av prosjektet og installer nødvendige avhengigheter:
```
cd client
npm install
```

Start klientapplikasjonen:
```
npm start
```

Applikasjonen vil nå kjøre på `http://localhost:3000`.

## Bruk

- **For Ansatte:** Naviger til hjemmesiden (`http://localhost:3000`) for å sende inn et anonymt forslag.
- **For HR-personell:** Naviger til `/login` for å logge inn og se de innsendte forslagene.
