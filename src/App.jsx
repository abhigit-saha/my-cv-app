import { useState } from "react";
import "/src/styles.css";
import {
  Document,
  Page,
  Text,
  View,
  StyleSheet,
  PDFViewer,
} from "@react-pdf/renderer";

const styles = StyleSheet.create({
  page: {
    // Fill the entire viewport height and width
    height: "100vh",
    width: "100vw",
  },
  head: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  headtext: {
    fontSize: "24",
  },
  subtext: {
    fontSize: "12",
  },
  components: {
    marginTop: "5%",
  },
  compHead: {
    fontSize: "20",
  },
  info: {
    fontSize: "16",
    marginLeft: "3%",
  },
  desc: {
    fontSize: "14",
    opacity: 0.9,
    marginLeft: "5%",
  },
  PDFViewer: {
    height: "100vh",
    width: "45vw",
  },
});
export default function App() {
  const [giState, setGIState] = useState(false);
  const [edexpState, setedexpState] = useState(false);
  const [profexpState, setprofexpState] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    school: "",
    degree: "",
    college: "",
    cgpa: "",
    role: "",
    company: "",
    description: "",
  });

  function handleSubmit(e) {
    e.preventDefault();
    console.log(formData);
    return <p>Your data has been submitted</p>;
  }

  return (
    <>
      <div className="screen">
        <header>
          <div className="navbar">
            <h1>CV APP</h1>
            <div className="icons">
              <a href="https://github.com/abhigit-saha">
                <i class="fa-brands fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/abhijit-saha-a440b5291/">
                <i class="fa-brands fa-linkedin"></i>
              </a>
            </div>
          </div>
        </header>
        <div className="grid">
          <div className="content">
            <div className="GeneralInfo">
              <GeneralInfo
                giState={giState}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
              />
            </div>
            <div className="EdExp">
              <EdExp
                edexpState={edexpState}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
              />
            </div>
            <div className="ProfExp">
              <ProfExp
                profexpState={profexpState}
                formData={formData}
                setFormData={setFormData}
                handleSubmit={handleSubmit}
              />
            </div>
          </div>
          <div className="pdf-preview">
            <PDFViewer style={styles.PDFViewer}>
              <MyDocument formData={formData} />
            </PDFViewer>
          </div>
        </div>
      </div>
    </>
  );
}

function MyDocument({ formData }) {
  return (
    <Document>
      <Page style={styles.page}>
        <View style={styles.head}>
          <Text style={styles.headtext}>{formData.name}</Text>
          <Text style={styles.subtext}>
            {formData.email} | {formData.phone}
          </Text>
        </View>
        <View style={styles.components}>
          <Text style={styles.compHead}>Educational Experience</Text>
          <Text style={styles.info}>{formData.school}</Text>
          <Text style={styles.info}>{formData.degree}</Text>
          <Text style={styles.info}>{formData.college}</Text>
          <Text style={styles.info}>{formData.cgpa}</Text>
        </View>
        <View style={styles.components}>
          <Text style={styles.compHead}>Professional Experience</Text>
          <Text style={styles.info}>{formData.role}</Text>
          <Text style={styles.info}>{formData.company}</Text>
          <Text style={styles.desc}>{formData.description}</Text>
        </View>
      </Page>
    </Document>
  );
}

function GeneralInfo({ formData, setFormData, handleSubmit }) {
  const [state, setState] = useState("Editing");

  function handleNameChange(e) {
    setFormData({ ...formData, name: e.target.value });
  }
  function handleEmailChange(e) {
    setFormData({ ...formData, email: e.target.value });
  }
  function handlePhoneChange(e) {
    setFormData({ ...formData, phone: e.target.value });
  }
  function editState(e) {
    setState("Editing");
  }
  function saveState(e) {
    setState("Saved");
    handleSubmit(e);
  }
  const underEdit = state === "Editing";
  const saved = state === "Saved";
  return (
    <>
      <h2>General Info</h2>
      <div className="name-container">
        <p>Name: </p>
        <Label
          className="name"
          handleChange={handleNameChange}
          editState={editState}
          saveState={saveState}
          text={formData.name}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="email-container">
        <p>Email: </p>
        <Label
          className="email"
          handleChange={handleEmailChange}
          editState={editState}
          saveState={saveState}
          text={formData.email}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="phone-container">
        <p>Phone no: </p>
        <Label
          className="phone"
          handleChange={handlePhoneChange}
          editState={editState}
          saveState={saveState}
          text={formData.phone}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="buttons">
        <button onClick={saveState}>Save info</button>
        <button onClick={editState}>Edit info</button>
      </div>
    </>
  );
}
function EdExp({ formData, setFormData, handleSubmit }) {
  const [state, setState] = useState("Editing");

  function handleSchoolChange(e) {
    setFormData({ ...formData, school: e.target.value });
  }
  function handleDegreeChange(e) {
    setFormData({ ...formData, degree: e.target.value });
  }
  function handleCollegeChange(e) {
    setFormData({ ...formData, college: e.target.value });
  }
  function handleCGPAChange(e) {
    setFormData({ ...formData, cgpa: e.target.value });
  }
  function editState(e) {
    setState("Editing");
  }
  function saveState(e) {
    setState("Saved");
    handleSubmit(e);
  }
  const underEdit = state === "Editing";
  const saved = state === "Saved";

  return (
    <>
      <h2>Educational Experiences</h2>
      <div className="school-container">
        <p>School: </p>
        <Label
          className="school"
          handleChange={handleSchoolChange}
          editState={editState}
          saveState={saveState}
          text={formData.school}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="degree-container">
        <p>Degree: </p>
        <Label
          className="degree"
          handleChange={handleDegreeChange}
          editState={editState}
          saveState={saveState}
          text={formData.degree}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="college-container">
        <p>College: </p>
        <Label
          className="college"
          handleChange={handleCollegeChange}
          editState={editState}
          saveState={saveState}
          text={formData.college}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="cgpa-container">
        <p>CGPA: </p>
        <Label
          className="cgpa"
          handleChange={handleCGPAChange}
          editState={editState}
          saveState={saveState}
          text={formData.cgpa}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="buttons">
        <button onClick={saveState}>Save info</button>
        <button onClick={editState}>Edit info</button>
      </div>
    </>
  );
}
function ProfExp({ formData, setFormData, handleSubmit }) {
  const [state, setState] = useState("Editing");

  function handleRoleChange(e) {
    setFormData({ ...formData, role: e.target.value });
  }
  function handleCompanyChange(e) {
    setFormData({ ...formData, company: e.target.value });
  }
  function handleDescriptionChange(e) {
    setFormData({ ...formData, description: e.target.value });
  }
  function editState(e) {
    setState("Editing");
  }
  function saveState(e) {
    setState("Saved");
    handleSubmit(e);
  }
  const underEdit = state === "Editing";
  const saved = state === "Saved";
  return (
    <>
      <h2>Professional Experience</h2>
      <div className="role-container">
        <p>Role: </p>
        <Label
          className="role"
          handleChange={handleRoleChange}
          editState={editState}
          saveState={saveState}
          text={formData.role}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="company-container">
        <p>Company: </p>
        <Label
          className="company"
          handleChange={handleCompanyChange}
          editState={editState}
          saveState={saveState}
          text={formData.company}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="desc-container">
        <p>Description: </p>
        <Label
          className="desc"
          handleChange={handleDescriptionChange}
          editState={editState}
          saveState={saveState}
          text={formData.description}
          underEdit={underEdit}
          saved={saved}
        />
      </div>
      <div className="buttons">
        <button onClick={saveState}>Save info</button>
        <button onClick={editState}>Edit info</button>
      </div>
    </>
  );
}
function Label({ text, saved, handleChange }) {
  return (
    <form>
      <input
        type="text"
        value={text}
        disabled={saved}
        onChange={handleChange}
      />
    </form>
  );
}
