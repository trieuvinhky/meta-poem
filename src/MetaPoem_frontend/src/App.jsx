import * as React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  useParams,
  Navigate,
} from "react-router-dom";
import TextEditor from "./TextEditor/TextEditor";
import TopBar from "./TopBar/TopBar";
import ShareModal from "./TopBar/ShareModal/ShareModal";
import SideBar from "./SideBar/SideBar";
import {
  MetaPoem_backend,
  canisterId,
  createActor,
} from "../../declarations/MetaPoem_backend";
import { AuthClient } from "@dfinity/auth-client";
import { v4 as uuidv4 } from "uuid";

const App = ({ authClient }) => {
  const [docName, setDocName] = React.useState("untitled");
  const [docID, setDocID] = React.useState("");
  const [openModal, setOpenModal] = React.useState(false);
  const [sidebar, setSidebar] = React.useState(false);
  const [switchDoc, setSwitchDoc] = React.useState(false);
  const [userDocs, setUserDocs] = React.useState([]);
  const [exportD, setExportD] = React.useState(false);
  const [selectedAccess, setAccess] = React.useState("Anyone");
  const [docsLoaded, setDocsLoaded] = React.useState(false);

  React.useEffect(() => {
    const getDocs = async () => {
      if (!authClient) return;
      
      const identity = await authClient.getIdentity();

      const authenticatedCanister = createActor(canisterId, {
        agentOptions: {
          identity,
        },
      });
      
      try {
        const docs = await authenticatedCanister.getUsersDocs();
        const intermDocsArr = [];
        for (var i = 0; i < docs.length; i++) {
          const dnam = await MetaPoem_backend.getDocName(docs[i]);
          intermDocsArr.push({
            doc_id: docs[i],
            doc_name: dnam,
          });
        }
        setUserDocs(intermDocsArr);
        setDocsLoaded(true);
      } catch (error) {
        console.error("Error loading docs:", error);
        setDocsLoaded(true);
      }
    };
    setTimeout(getDocs, 2000);
  }, [authClient]);

  async function deleteDoc(id) {
    setUserDocs((prevDocs) => {
      return prevDocs.filter((docItem, index) => {
        return docItem["doc_id"] !== id;
      });
    });
    
    if (!authClient) return;
    
    const identity = await authClient.getIdentity();

    const authenticatedCanister = createActor(canisterId, {
      agentOptions: {
        identity,
      },
    });
    await authenticatedCanister.removeUserDoc(id);
  }

  async function addDoc(id) {
    const newDoc = {
      doc_id: id,
      doc_name: "untitled",
    };

    for (var i = 0; i < userDocs.length; i++) {
      var checkDoc = userDocs[i];
      if (checkDoc["doc_id"] == id) {
        return;
      }
    }

    setUserDocs((prevDocs) => [...prevDocs, newDoc]);
  }

  const showSidebar = () => setSidebar(!sidebar);

  const modalHandler = async (id) => {
    setOpenModal((prevState) => !prevState);
    await MetaPoem_backend.updateDocAccess(id, selectedAccess);
  };

  const switchDocHandler = () => {
    setSwitchDoc(true);
  };

  const updateDocName = (id, docname) => {
    var updateDocs = [...userDocs];
    for (var i = 0; i < updateDocs.length; i++) {
      var d = updateDocs[i];
      if (d["doc_id"] == id) {
        d["doc_name"] = docname;
        break;
      }
    }
    setUserDocs([...updateDocs]);
  };

  React.useEffect(() => {
    if (switchDoc) {
      setTimeout(() => {
        setSwitchDoc(false);
      }, 50);
    }
  }, [switchDoc]);

  const exportDocHandler = () => {
    setExportD(true);
  };

  React.useEffect(() => {
    if (exportD) {
      setTimeout(() => {
        setExportD(false);
      }, 1000);
    }
  }, [exportD]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navigate to={`/MetaPoem/${uuidv4()}`} />} />
        <Route
          path="/MetaPoem/:id"
          element={
            <>
              {openModal && (
                <ShareModal
                  selectedAccess={selectedAccess}
                  setAccess={setAccess}
                  modalHandler={modalHandler}
                  docName={docName}
                />
              )}
              <div>
                {!switchDoc && (
                  <TopBar
                    updateDocName={updateDocName}
                    exportDoc={exportDocHandler}
                    showSidebar={showSidebar}
                    docName={docName}
                    setDocName={setDocName}
                    docID={docID}
                    modalHandler={modalHandler}
                  />
                )}
                {sidebar && (
                  <SideBar
                    docsLoaded={docsLoaded}
                    deleteDoc={deleteDoc}
                    switchDocHandler={switchDocHandler}
                    docs={userDocs}
                  />
                )}
                {!switchDoc && (
                  <TextEditor
                    exportD={exportD}
                    docName={docName}
                    docID={docID}
                    setDocID={setDocID}
                    addDoc={addDoc}
                  />
                )}
              </div>
            </>
          }
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
