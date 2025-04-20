# Hotel Management System

A modern hotel management web application built with Next.js and Sanity CMS.

## ✨ Features

- Room management and booking system
- User authentication and authorization
- Customer information management
- Responsive and user-friendly interface
- Sanity CMS integration for content management

## 🛠 Tech Stack

- **Frontend**: Next.js, TypeScript
- **Styling**: Tailwind CSS
- **CMS**: Sanity
- **Authentication**: NextAuth.js
- **Database**: Sanity Studio

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn
- Sanity account

## 🚀 Getting Started

1. Clone the repository:
```bash
git clone [repository-url]
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Create a `.env` file and configure environment variables:
```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=your_dataset
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

4. Run the development server:
```bash
npm run dev
# or
yarn dev
```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

## 📁 Project Structure

```
├── src/              # Main source code
├── schemas/          # Sanity schemas
├── public/           # Static files
├── .next/            # Next.js build output
└── node_modules/     # Dependencies
```

## 🤝 Contributing

Contributions are welcome! Please feel free to submit a Pull Request or open an Issue to discuss your changes.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 📞 Contact

If you have any questions or suggestions, please feel free to contact us via email or open an issue in the repository.
