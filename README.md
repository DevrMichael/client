# Anonymt Forslagsboks System
Link til server repositoriet for denne oppgaven: https://github.com/DevrMichael/suggestion-box

## Om Prosjektet

Dette prosjektet er en enkel webapplikasjon designet for å la ansatte sende inn anonyme forslag for å forbedre arbeidsmiljøet. HR-personell kan logge inn for å se og behandle disse forslagene.

<img width="890" alt="Skjermbilde 2024-03-18 kl  17 26 32" src="https://github.com/DevrMichael/client/assets/88589247/e852da72-d219-4d68-8788-ac20f384f991">
<img width="890" alt="Skjermbilde 2024-03-18 kl  17 27 02" src="https://github.com/DevrMichael/client/assets/88589247/b24a2216-3e54-41f2-b974-8d5f8f809a07">
<img width="890" alt="Skjermbilde 2024-03-18 kl  17 27 13" src="https://github.com/DevrMichael/client/assets/88589247/8ee3340e-0fdd-453d-8751-587d0eb4221e">



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
```

2. **Sett opp Frontend:**

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

For å logge inn som en ansatt, bruk brukernavnet `user` og passordet `userpassword`.

- **For HR-personell:** Naviger til `/login` for å logge inn og se de innsendte forslagene.

For å logge inn som HR-personell, bruk brukernavnet `hr` og passordet `password`.

