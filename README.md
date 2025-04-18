
#  Portal Project

A full-stack portal application built using Angular (frontend), Spring Boot (backend), and PostgreSQL (database).

---

## Technologies Used

- **Frontend:** Angular
- **Backend:** Spring Boot
- **Database:** PostgreSQL
- **Build Tools:** Maven
- **Package Manager:** npm

---

##  Project Structure

```
PortalProject/
├── backend/        # Spring Boot application
├── frontend/       # Angular application
├── db_dump.sql     # PostgreSQL database dump file
└── README.md
```

---

##  Setup Instructions

###  1. Prerequisites

Make sure you have the following installed:

- [Node.js](https://nodejs.org/) (v16 or higher)
- [Angular CLI](https://angular.io/cli)
- [Java JDK](https://www.oracle.com/java/technologies/javase-jdk17-downloads.html) (v17 recommended)
- [PostgreSQL](https://www.postgresql.org/download/) (v13 or later)
- [Maven](https://maven.apache.org/install.html)

---

###  2. Clone the Repository

```bash
git clone https://github.com/yourusername/portal-project.git
cd portal-project
```

---

###  3. Frontend (Angular)

```bash
cd frontend
npm install
ng serve
```

The frontend will run on: `http://localhost:4200`

---

###  4. Backend (Spring Boot)

```bash
cd ../backend
# Edit application.properties to match your PostgreSQL credentials
mvn spring-boot:run
```

The backend will run on: `http://localhost:8080`

---

###  5. Database (PostgreSQL)

1. Open **pgAdmin** or connect via terminal.
2. Create a new database (e.g., `portaldb`).
3. Run the SQL dump file:

```bash
psql -U your_username -d portaldb -f db_dump.sql
```

4. Update your backend `application.properties` to:

```properties
spring.datasource.url=jdbc:postgresql://localhost:5432/portaldb
spring.datasource.username=your_username
spring.datasource.password=your_password
```

---

## Done!

Open your browser at `http://localhost:4200` to use the portal!
