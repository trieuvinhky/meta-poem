# MetaPoem 📝

> **Writers draft, mint, and share stories or poems with full ownership**

MetaPoem leverages blockchain technology to build a flexible and transparent network for unstructured data and dynamic content. It creates a decentralized "verse" where information flows freely and securely, unconstrained by traditional intermediaries and verifiable on-chain.

## ✨ Features

### 📝 **Core Document Management**
- **Real-time Collaborative Editing**: Multiple users can edit documents simultaneously
- **Rich Text Editor**: Powered by Quill.js with full formatting capabilities
- **Document Organization**: Create, manage, and organize multiple documents
- **Auto-save Functionality**: Documents are automatically saved to the blockchain
- **PDF Export**: Export documents to PDF format for sharing and archiving
- **Document Sharing**: Share documents with custom access permissions
- **Version Control**: Track document changes and revisions
- **User Authentication**: Internet Identity integration for secure access

### 🌐 **Real-time Collaboration**
- **Peer-to-Peer Connectivity**: Direct P2P connections using WebRTC
- **Live Cursor Tracking**: See other users' cursors and selections in real-time
- **Conflict Resolution**: Smart conflict resolution for simultaneous edits
- **User Presence**: See who's currently editing the document
- **Session Management**: Manage active collaboration sessions
- **Offline Support**: Continue editing when offline, sync when reconnected

### 🎨 **Modern UI/UX Design**
- **Clean Interface**: Minimalist design focused on content creation
- **Responsive Layout**: Works seamlessly on desktop, tablet, and mobile
- **Sidebar Navigation**: Easy document switching and management
- **Dark/Light Mode**: Theme support for better user experience
- **Accessibility**: WCAG compliant with keyboard navigation support
- **Smooth Animations**: Polished transitions and micro-interactions
- **Toast Notifications**: Real-time feedback for all actions

### 🔒 **Security & Privacy**
- **Decentralized Storage**: Documents stored on Internet Computer blockchain
- **End-to-End Encryption**: Secure P2P communication
- **Identity Management**: Internet Identity for authentication
- **Access Control**: Fine-grained document permissions
- **Data Integrity**: Blockchain ensures document immutability
- **Privacy First**: No central server storing your content

### 🏗️ **Production-Ready Architecture**
- **Scalable Backend**: Motoko canister architecture
- **Type-Safe Development**: Full TypeScript implementation
- **Error Handling**: Comprehensive error boundaries and validation
- **Performance Optimized**: Efficient real-time synchronization
- **Modular Design**: Clean component architecture
- **WebRTC Integration**: Advanced P2P networking capabilities

## 🛠️ Technology Stack

### **Backend (Motoko)**
- **Internet Computer Protocol**: Decentralized blockchain infrastructure
- **Motoko Language**: Type-safe, actor-based programming
- **Stable Memory**: Persistent document storage with upgrade capability
- **Canister Architecture**: Scalable backend services
- **Query Optimization**: Efficient document retrieval

### **Frontend (React + TypeScript)**
- **React 18**: Latest React with concurrent features
- **TypeScript**: Full type safety and developer experience
- **Quill.js**: Rich text editor with collaborative features
- **React-Quill**: React wrapper for Quill editor
- **Simple-Peer**: WebRTC peer-to-peer connectivity
- **React Router**: Client-side routing and navigation
- **SCSS**: Advanced styling with variables and mixins
- **UUID**: Unique identifier generation

### **Real-time Communication**
- **WebRTC**: Peer-to-peer real-time communication
- **Signaling Server**: Motoko-based signaling for P2P setup
- **Data Channels**: Efficient data transmission between peers
- **Connection Management**: Robust peer connection handling

### **Development Tools**
- **Vite**: Fast build tool and development server
- **DFX**: Internet Computer SDK
- **TypeScript Compiler**: Static type checking
- **SASS**: CSS preprocessing with advanced features

## 🚀 Getting Started

### Prerequisites

Ensure you have the following installed:

- **Node.js** (>= 16.0.0)
- **npm** (>= 7.0.0)
- **DFX** (>= 0.14.0)

### Installation

1. **Clone Repository**
   ```bash
   git clone <repository-url>
   cd MetaPoem
   ```

2. **Install Dependencies**
   ```bash
   npm install
   cd src/MetaPoem_frontend
   npm install
   ```

3. **Start Local Replica**
   ```bash
   dfx start --background
   ```

4. **Deploy Canisters**
   ```bash
   dfx deploy
   ```

5. **Start Development Server**
   ```bash
   cd src/MetaPoem_frontend
   npm start
   ```

6. **Open Application**
   Navigate to `http://localhost:3000` in your browser

### Quick Setup Script

```bash
# Setup script (from project root)
npm install
dfx start --background
dfx deploy
cd src/MetaPoem_frontend && npm install && npm start
```

## 📖 Usage Guide

### Creating Your First Document

1. **Authentication**: Login with Internet Identity when prompted
2. **Create Document**: The app automatically creates a new document
3. **Start Writing**: Use the rich text editor to create content
4. **Document Name**: Click on "untitled" in the top bar to rename
5. **Auto-save**: Your changes are automatically saved

### Collaborating in Real-time

1. **Share Document**: Click the share button in the top bar
2. **Set Permissions**: Choose access level (Anyone/Restricted)
3. **Copy Link**: Share the document URL with collaborators
4. **Real-time Editing**: See live cursors and changes from other users
5. **User Presence**: View active collaborators in the interface

### Managing Documents

- **Document List**: Click the sidebar toggle to view all documents
- **Switch Documents**: Click any document in the sidebar to open
- **Delete Documents**: Use the delete option in document menu
- **Export PDF**: Use the export button to download as PDF
- **Rename**: Click on document name to edit

### Using the Rich Text Editor

- **Formatting**: Use the toolbar for bold, italic, underline, etc.
- **Lists**: Create bullet points and numbered lists
- **Links**: Add hyperlinks to external resources
- **Images**: Insert images directly into documents
- **Undo/Redo**: Standard editing commands supported
- **Keyboard Shortcuts**: Standard shortcuts (Ctrl+B, Ctrl+I, etc.)

## 🏗️ Architecture Overview

### Backend Structure

```
src/
├── MetaPoem_backend/
│   ├── main.mo              # Main document canister
│   └── types.mo             # Type definitions
├── signalling/
│   ├── main.mo              # P2P signaling server
│   ├── database.mo          # Connection database
│   └── types.mo             # Signaling types
└── declarations/            # Generated type declarations
```

### Frontend Structure

```
src/MetaPoem_frontend/src/
├── components/
│   ├── SideBar/            # Document navigation
│   │   ├── SideBar.jsx
│   │   ├── SideBar.css
│   │   └── DocMenuItem/
│   ├── TextEditor/         # Rich text editor
│   │   ├── TextEditor.jsx
│   │   ├── TextEditor.css
│   │   └── MyPeer.jsx      # P2P connectivity
│   └── TopBar/             # Navigation and actions
│       ├── TopBar.jsx
│       ├── TopBar.css
│       ├── Avatar/
│       └── ShareModal/
├── constants/              # Application constants
├── App.jsx                # Main application component
├── main.jsx               # Application entry point
└── index.scss            # Global styles
```

## 🔧 API Reference

### Backend Methods (MetaPoem_backend)

#### Document Management
- `createDoc(content: Text)` - Create new document
- `updateDoc(id: Text, content: Text)` - Update document content
- `getDoc(id: Text)` - Get document by ID
- `getUsersDocs()` - Get user's documents
- `removeUserDoc(id: Text)` - Remove document from user's list
- `getDocName(id: Text)` - Get document name
- `updateDocName(id: Text, name: Text)` - Update document name
- `updateDocAccess(id: Text, access: Text)` - Update document permissions

### Signaling Server Methods

#### P2P Connection Management
- `addUser(userId: Text, socketId: Text)` - Register user for P2P
- `removeUser(userId: Text)` - Remove user from P2P network
- `getUsers()` - Get active P2P users
- `createRoom(roomId: Text)` - Create collaboration room
- `joinRoom(roomId: Text, userId: Text)` - Join collaboration room

### Frontend Services

#### Document Service
```typescript
// Create document
const result = await MetaPoem_backend.createDoc(content);

// Get user documents
const docs = await authenticatedCanister.getUsersDocs();

// Update document
await MetaPoem_backend.updateDoc(docId, content);

// Export to PDF
import { saveAs } from 'file-saver';
// PDF generation logic with quill-to-pdf
```

## 🎨 Customization

### Theme Customization

Modify the global styles in `src/MetaPoem_frontend/src/index.scss`:

```scss
:root {
  --primary-color: #3b82f6;
  --secondary-color: #8b5cf6;
  --background-color: #ffffff;
  --text-color: #1f2937;
  --border-color: #e5e7eb;
  --sidebar-width: 250px;
  --topbar-height: 60px;
}
```

### Editor Customization

Customize the Quill editor in `TextEditor.jsx`:

```javascript
const modules = {
  toolbar: [
    [{ 'header': [1, 2, 3, false] }],
    ['bold', 'italic', 'underline'],
    [{ 'list': 'ordered'}, { 'list': 'bullet' }],
    ['link', 'image'],
    ['clean']
  ],
};
```

### Adding New Features

1. **Backend Changes**:
   - Update Motoko types and functions
   - Deploy updated canister
   - Generate new declarations

2. **Frontend Changes**:
   - Update TypeScript interfaces
   - Modify React components
   - Test in development environment

## 🧪 Testing

### Backend Testing

```bash
# Deploy to local replica
dfx deploy

# Test document creation
dfx canister call MetaPoem_backend createDoc '("Hello World")'

# Test document retrieval
dfx canister call MetaPoem_backend getDoc '("doc-id-here")'
```

### Frontend Testing

```bash
# Start development server
npm start

# Test collaboration
# Open multiple browser tabs to same document URL
# Test real-time editing and cursor tracking
```

### P2P Testing

```bash
# Test signaling server
dfx canister call signalling addUser '("user1", "socket1")'
dfx canister call signalling getUsers '()'
```

## 📝 Development Workflow

### Adding New Document Features

1. **Update Backend**:
   ```motoko
   // Add new function in main.mo
   public func newFeature(param: Text) : async Result<Text, Text> {
     // Implementation
   };
   ```

2. **Update Frontend**:
   ```typescript
   // Add to document service
   const newFeature = async (param: string) => {
     return await MetaPoem_backend.newFeature(param);
   };
   ```

3. **Deploy Changes**:
   ```bash
   dfx deploy MetaPoem_backend
   dfx generate
   ```

### Code Quality

```bash
# Type check
npx tsc --noEmit

# Build frontend
npm run build

# Format code (if configured)
npm run format
```

## 🚀 Deployment

### Local Development

```bash
dfx start --background
dfx deploy
cd src/MetaPoem_frontend && npm start
```

### IC Mainnet Deployment

```bash
# Deploy to mainnet
dfx deploy --network ic

# Note: Requires cycles and wallet configuration
```

### Production Build

```bash
# Build frontend for production
cd src/MetaPoem_frontend
npm run build

# Deploy frontend canister
dfx deploy MetaPoem_frontend --network ic
```

## 🤝 Contributing

We welcome contributions! Please follow these guidelines:

1. **Fork** the repository
2. **Create** a feature branch: `git checkout -b feature/amazing-feature`
3. **Commit** your changes: `git commit -m 'Add amazing feature'`
4. **Push** to branch: `git push origin feature/amazing-feature`
5. **Open** a Pull Request

### Development Standards

- Write TypeScript with strict mode
- Follow React best practices
- Use semantic commit messages
- Test P2P functionality thoroughly
- Document API changes
- Ensure mobile responsiveness

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🎯 Roadmap

### Phase 1 (Current)
- ✅ Real-time collaborative editing
- ✅ P2P connectivity with WebRTC
- ✅ Document management
- ✅ PDF export functionality
- ✅ Internet Identity authentication

### Phase 2 (Next)
- 🔄 Enhanced conflict resolution
- 🔄 Document templates
- 🔄 Advanced formatting options
- 🔄 Comment and suggestion system
- 🔄 Document history and versioning

### Phase 3 (Future)
- 📅 Calendar integration for scheduled editing
- 📊 Analytics and usage statistics
- 🔔 Real-time notifications
- 📱 Mobile app development
- 🌍 Multi-language support

## 🙏 Acknowledgments

- **Internet Computer Protocol** - Decentralized hosting platform
- **Motoko Team** - Type-safe blockchain programming language
- **React Team** - Modern frontend framework
- **Quill.js** - Rich text editor foundation
- **WebRTC Community** - Real-time communication standards
- **Open Source Community** - Amazing tools and libraries

## 📞 Support

- **Documentation**: Check this README and inline code comments
- **Issues**: Report bugs via GitHub Issues
- **Community**: Join ICP developer forums
- **Updates**: Follow project updates on GitHub

---

<div align="center">

**Built with ❤️ for Collaborative Document Creation on Internet Computer**

[![ICP](https://img.shields.io/badge/Internet_Computer-Protocol-blue?style=flat-square)](https://internetcomputer.org/)
[![Motoko](https://img.shields.io/badge/Motoko-Language-purple?style=flat-square)](https://internetcomputer.org/docs/current/motoko/main/motoko)
[![React](https://img.shields.io/badge/React-Framework-blue?style=flat-square)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-Language-blue?style=flat-square)](https://www.typescriptlang.org/)
[![WebRTC](https://img.shields.io/badge/WebRTC-P2P-green?style=flat-square)](https://webrtc.org/)

</div>
