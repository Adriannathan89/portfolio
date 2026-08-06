Buat sebuah portfolio website pribadi yang modern, responsive, accessible, dan production-ready untuk:

Nama: Adrian Nathanael Setiawan

Tujuan website:
Menampilkan profil singkat, proyek software engineering, pengalaman organisasi, awards, serta kontak profesional. Gunakan bahasa Inggris untuk seluruh copy utama.

Sebelum mulai:

1. Periksa struktur workspace yang tersedia.
2. Jika sudah ada project frontend, ikuti stack dan konvensi yang digunakan.
3. Jika belum ada project, gunakan:

   * Next.js dengan App Router
   * TypeScript
   * Tailwind CSS
   * Framer Motion untuk animasi
   * Lucide Icons
4. Buat rencana implementasi singkat, lalu langsung implementasikan.
5. Jangan hanya membuat mockup statis. Semua navigasi, tautan, animasi, dan responsive layout harus berfungsi.
6. Jangan mengarang metrik, jumlah pengguna, atau pencapaian yang tidak diberikan.

DESIGN DIRECTION

Buat tampilan dark technical-editorial yang terasa premium, minimal, dan personal.

Visual direction:

* Dark charcoal atau near-black background
* Off-white text
* Electric blue atau cyan sebagai primary accent
* Lime atau warm amber sebagai secondary accent
* Subtle grid/noise background
* Rounded cards dengan border tipis
* Soft shadow dan restrained glow
* Typography bersih dengan heading ekspresif
* Gunakan bento grid sebagai elemen utama, tetapi hindari tampilan seperti dashboard SaaS biasa
* Animasi harus halus dan tidak berlebihan
* Hormati preferensi `prefers-reduced-motion`
* Jangan menggunakan stock photo acak

Buat design tokens untuk warna, spacing, radius, shadow, dan typography agar mudah diubah.

SITE STRUCTURE

1. Sticky Header
2. Hero / Biodata
3. Selected Projects
4. Organizations & Experience
5. Awards
6. Contact / Footer

HEADER

Buat sticky header yang compact dan berubah menjadi mobile menu pada layar kecil.

Konten:

* Brand/name: “Adrian Nathanael Setiawan”
* Navigation: About, Projects, Experience, Awards
* LinkedIn icon/link: `[LINKEDIN_URL]`
* WhatsApp icon/link: `[WHATSAPP_URL]`

Semua internal navigation menggunakan smooth scrolling. External link harus dibuka pada tab baru dengan atribut keamanan yang sesuai.

HERO / BIODATA SECTION

Hero adalah bagian pertama setelah header.

Konten:

* Eyebrow: “Software Engineer · Backend & Distributed Systems”
* Heading utama: “Adrian Nathanael Setiawan”
* Biodata sementara:
  “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.”
* Primary CTA: “Explore My Work”
* Secondary CTA: “Contact Me”
* Tambahkan visual abstrak berbasis CSS, grid, code-inspired pattern, atau system diagram sederhana. Jangan gunakan foto profil karena belum tersedia.
* Sisakan struktur data yang jelas agar biodata dan foto dapat diganti dengan mudah.

PROJECTS SECTION

Judul:
“Selected Projects”

Deskripsi:
“A selection of backend systems, full-stack applications, developer tools, and distributed infrastructure I have built.”

Gunakan responsive bento grid:

* Desktop: 12-column composition dengan ukuran kartu bervariasi
* Tablet: 2 kolom
* Mobile: 1 kolom
* Kartu proyek harus memiliki project name, category, concise description, core feature, repository links, visual area, dan tech stack chips di bagian bawah
* Seluruh kartu dapat diklik atau memiliki tombol “View Repository”
* Berikan hover state yang menarik: border highlight, subtle lift, visual movement, atau animated technical pattern
* Tech stack harus selalu berada di bagian bawah kartu
* Buat data proyek dalam array/typed configuration agar mudah ditambah atau diubah

PROJECT 1 — nestjs-cacheable

Category:
Open-source NestJS caching library

Description:
“A reusable caching package for NestJS that adds declarative caching and cache invalidation through decorators and interceptors.”

Core features:

* NestJS interceptor-based caching
* `@Cacheable`-style declarative caching
* Tag-based cache invalidation
* Redis-backed cache storage
* Optional in-memory L1 cache
* Configurable TTL and cache keys
* End-to-end tests

Tech stack:

* TypeScript
* NestJS
* Redis
* RxJS
* Jest
* pnpm

Repository:
https://github.com/Adriannathan89/nestjs-cacheable

PROJECT 2 — BayarWoy

Category:
Full-stack personal finance and debt management platform

Description:
“A financial record and debt-management platform that combines a Go backend, an Angular interface, and a lightweight NLP service to classify natural-language transaction input.”

Core features:

* CRUD for financial records and debt tracking
* User authentication and profile management
* Friend requests and shared debt workflows
* Natural-language transaction classification
* Transaction category and income/expense prediction
* Discord verification and notification integration
* Dockerized services and CI/CD workflows

Tech stack:

* Go
* Gin
* GORM
* PostgreSQL
* SQLite
* JWT
* Angular 21
* TypeScript
* Angular Material
* Tailwind CSS
* Axios
* Python
* FastAPI
* scikit-learn
* TF-IDF
* Logistic Regression
* Docker
* Discord API

Repositories:

* Backend: https://github.com/Adriannathan89/bayarWoyBE_Record
* Frontend: https://github.com/Adriannathan89/bayarWoyFE
* NLP service: https://github.com/Adriannathan89/bayarwoy-slm

Because this is the largest project, make its bento card span more columns than the other projects. Provide three clearly labeled repository links.

PROJECT 3 — COMPFEST Registration Requirement / SIAK NG Lite

Category:
Full-stack academic management application

Description:
“A full-stack academic workflow application built as a COMPFEST registration requirement, covering subjects, classes, schedules, course enrollment, and student scoring.”

Core features:

* CRUD for subjects, classes, schedules, and academic data
* Student course enrollment workflow
* Lecturer and student interfaces
* Student score management
* Authentication and role-based authorization
* Backend organized using clean architecture concepts and SOLID principles
* API documentation and validation

Tech stack:

* React 19
* TypeScript
* Vite
* Tailwind CSS
* shadcn/ui
* React Router
* NestJS 11
* Drizzle ORM
* PostgreSQL
* JWT
* Passport
* Swagger
* Jest
* Docker

Repositories:

* Frontend: https://github.com/Adriannathan89/CompfestOprecFE
* Backend: https://github.com/Adriannathan89/CompfestOprecBE

PROJECT 4 — DDP-0 Python Grader

Category:
Distributed online judge and automated grading system

Description:
“A distributed Python grading platform designed to process programming submissions asynchronously and execute each test case inside an isolated environment.”

Core features:

* Redis Streams-based grading job queue
* Distributed job consumption
* Concurrent workers using Go goroutines
* Retry handling and dead-letter queue
* Recovery of jobs from unavailable workers
* Isolated Python execution using hardened Docker containers
* Time, memory, process, network, and output limits
* Problem, testcase, submission, progress, review, and leaderboard APIs
* PostgreSQL persistence and S3-compatible object storage

Tech stack:

* Go
* Gin
* Goroutines
* Redis Streams
* GORM
* PostgreSQL
* Docker
* Python 3.12
* AWS SDK / S3
* JWT
* GitHub Actions

Repository:
https://github.com/Adriannathan89/ddp0_grader

ORGANIZATIONS & EXPERIENCE SECTION

Judul:
“Organizations & Experience”

Deskripsi:
“Engineering experiences where I contributed to backend systems, academic platforms, and distributed developer infrastructure.”

Jangan tampilkan pengalaman sebagai list vertikal biasa. Buat section yang penuh dan menarik menggunakan kombinasi:

* Interactive timeline
* Large organization cards
* Role labels
* Numbered markers
* Visual connector line
* Small technical contribution blocks
* Tech stack chips
* External-link CTA

Pada desktop, gunakan alternating timeline atau composition dengan kartu yang saling offset. Pada mobile, ubah menjadi stacked cards yang mudah dibaca.

EXPERIENCE 1

Organization:
BETIS

Role:
Backend Developer

Website:
https://betis.id

Description:
“Contributed to backend development for BETIS by building and maintaining CRUD-based application capabilities with NestJS. Worked on API structure, request validation, data flow, error handling, and maintainable service organization while collaborating with the development team.”

Highlights:

* Designed and maintained RESTful CRUD endpoints
* Organized backend logic using NestJS modules, controllers, and services
* Applied validation and consistent error handling
* Collaborated on feature integration and backend maintenance

Tech stack:

* NestJS
* TypeScript
* REST API

CTA:
“Visit betis.id”

EXPERIENCE 2

Organization:
COMPFEST

Role:
Software Engineer

Website:
https://compfest.id

Description:
“Worked on backend application features using NestJS and Drizzle ORM, with an emphasis on clean architecture, SOLID principles, maintainable modules, and clear separation of responsibilities.”

Highlights:

* Built and maintained CRUD functionality with NestJS
* Used Drizzle ORM for typed database access
* Applied clean architecture concepts and SOLID principles
* Structured features for maintainability and testing
* Collaborated across product and engineering requirements

Tech stack:

* NestJS
* TypeScript
* Drizzle ORM
* PostgreSQL
* Clean Architecture
* SOLID

CTA:
“Visit compfest.id”

EXPERIENCE 3

Organization:
DDP-0

Role:
Staff

Website:
https://ddp0.csui.dev

Description:
“Contributed to systems supporting DDP-0 activities, ranging from Django-based CRUD functionality to asynchronous grading infrastructure powered by Redis and distributed Go workers.”

Highlights:

* Developed CRUD functionality using Django
* Built asynchronous jobs using Redis-backed queues
* Distributed grading tasks across concurrent workers
* Used Go goroutines for parallel job processing
* Worked on reliable execution and task-processing flows

Tech stack:

* Django
* Python
* Go
* Goroutines
* Redis
* Distributed Workers

CTA:
“Visit ddp0.csui.dev”

AWARDS SECTION

Judul:
“Awards & Recognition”

Deskripsi:
“Selected achievements, competition results, and recognitions.”

Gunakan bento grid yang responsive. Karena data awards belum diberikan:

* Tampilkan beberapa placeholder award cards
* Gunakan “Award Title” sebagai placeholder judul
* Gunakan neutral image placeholder, bukan gambar palsu
* Setiap award card mendukung:

  * `title`
  * `image`
  * `issuer` opsional
  * `year` opsional
  * `description` opsional
  * `url` opsional
  * `featured` untuk mengatur ukuran kartu
* Buat reusable `AwardCard` component
* Simpan data awards dalam satu typed array terpisah
* Menambahkan award baru tidak boleh memerlukan perubahan pada layout component
* Gunakan `object-fit: cover`, consistent aspect ratio, dan graceful fallback jika gambar tidak tersedia

CONTACT / FOOTER

Buat closing section yang terasa kuat, bukan footer kecil biasa.

Konten:

* Heading: “Let’s build something meaningful.”
* Supporting text: “I’m always interested in thoughtful engineering challenges, backend systems, and collaborative opportunities.”
* LinkedIn: `[LINKEDIN_URL]`
* WhatsApp: `[WHATSAPP_URL]`
* Name: “Adrian Nathanael Setiawan”
* Dynamic current year

UX AND ACCESSIBILITY

* Fully responsive mulai dari 320px
* Semantic HTML
* Keyboard-accessible navigation dan cards
* Visible focus states
* Good color contrast
* Alt text untuk semua gambar
* External link memiliki icon dan accessible label
* Lazy-load gambar awards
* Hindari layout shift
* Jangan membuat animasi yang mengganggu pembacaan
* Gunakan reusable components dan hindari duplikasi markup

SUGGESTED COMPONENT STRUCTURE

* `Header`
* `MobileNavigation`
* `HeroSection`
* `SectionHeading`
* `ProjectsSection`
* `ProjectBentoGrid`
* `ProjectCard`
* `ExperienceSection`
* `ExperienceTimeline`
* `ExperienceCard`
* `AwardsSection`
* `AwardBentoGrid`
* `AwardCard`
* `ContactSection`
* `Footer`
* `TechBadge`
* `ExternalLink`

Pisahkan project, experience, awards, navigation, dan contact links ke typed data/configuration files.

VERIFICATION

Setelah implementasi:

1. Jalankan formatter dan linter.
2. Jalankan type checking.
3. Jalankan test yang tersedia.
4. Jalankan production build.
5. Perbaiki semua error.
6. Periksa tampilan desktop, tablet, dan mobile.
7. Pastikan seluruh repository, organization, LinkedIn, dan WhatsApp link menggunakan URL yang benar.
8. Laporkan file utama yang dibuat atau diubah serta hasil verifikasinya.

Jangan berhenti setelah membuat skeleton. Selesaikan website sampai siap dijalankan.

VISUAL IMPLEMENTATION WITHOUT FIGMA

There is no Figma design or external visual reference. Treat the design direction in this prompt as the source of truth.

Before implementation:

1. Define the visual system, including color tokens, typography scale, spacing, card radius, borders, shadows, and responsive breakpoints.
2. Create the page composition before filling in detailed content.
3. Avoid generic portfolio templates and generic SaaS dashboard patterns.
4. Use asymmetric but visually balanced bento grids.
5. Keep each section visually distinct while maintaining one consistent design language.

After implementation:

1. Open the website in a real browser.
2. Inspect it at 1440px, 768px, and 390px widths.
3. Take screenshots of every breakpoint.
4. Review visual hierarchy, spacing, text density, overflow, card balance, and readability.
5. Iterate until the website looks intentional and polished, not merely functional.
6. Ensure that project descriptions remain readable and do not overcrowd the bento cards.
