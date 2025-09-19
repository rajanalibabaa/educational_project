import React, { useState } from 'react';

const Register = () => {
  const [formData, setFormData] = useState({
    rollNo: '',
    name: '',
    fatherName: '',
    dob: '',
    placeOfBirth: '',
    community: '',
    presentAddress: '',
    contactNumber: '',
    email: '',
    permanentAddress: '',
    qualifications: {
      tenth: { institution: '', subject: '', year: '', marks: '' },
      twelfth: { institution: '', subject: '', year: '', marks: '' },
      degree: { institution: '', subject: '', year: '', marks: '' },
      master: { institution: '', subject: '', year: '', marks: '' },
      others: { institution: '', subject: '', year: '', marks: '' }
    },
    courseOpted: '',
    preliminary: {
      gs: false,
      csat: false,
      gsTestBatch: false,
      csatTestBatch: false
    },
    main: {
      gs: false,
      optional: false,
      gsTestBatch: false,
      optionalTestBatch: false
    },
    optionalSubject: '',
    otherSubject: '',
    interview: {
      coaching: false,
      mockInterview: false,
      upsc: false,
      tnpsc: false
    },
    howKnow: '',
    declaration: false,
    signature: null,
    place: '',
    signatureDate: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    
    if (type === 'checkbox') {
      const category = name.split('.')[0];
      const field = name.split('.')[1];
      
      setFormData(prev => ({
        ...prev,
        [category]: {
          ...prev[category],
          [field]: checked
        }
      }));
    } else {
      setFormData(prev => ({
        ...prev,
        [name]: value
      }));
    }
  };

  const handleQualificationChange = (level, field, value) => {
    setFormData(prev => ({
      ...prev,
      qualifications: {
        ...prev.qualifications,
        [level]: {
          ...prev.qualifications[level],
          [field]: value
        }
      }
    }));
  };

  const handleSignatureUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        setFormData(prev => ({
          ...prev,
          signature: event.target.result
        }));
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    console.log(formData);
    alert('Form submitted successfully!');
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwLa1vjUqEAjHfx62R2XeUxcLmK44MJk94FjVLC4KwvBYODVm1Ynhg0A86DpAIj-sx_/exec';
      await fetch(scriptURL,
      {  
        method: 'POST',
        mode: 'no-cors',
        headers: {
        'Content-Type': 'application/json',
      },
        body:  JSON.stringify(formData)
      });
  };

  return (
    <div className="registration-form-container"
      style={{marginTop : "1rem",marginBottom:'1rem'}}
    >
      <div className="form-header">
        <h2>REGISTRATION FORM</h2>
      </div>

      <form onSubmit={handleSubmit} className="registration-form">
        <div className="form-section">
          <div className="form-group">
            <label htmlFor="rollNo">Roll No:</label>
            <input
              type="text"
              id="rollNo"
              name="rollNo"
              value={formData.rollNo}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="name">Name in (Capital Letters):</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              style={{textTransform: 'uppercase'}}
            />
          </div>

          <div className="form-group">
            <label htmlFor="fatherName">Father's Name/Occupation:</label>
            <input
              type="text"
              id="fatherName"
              name="fatherName"
              value={formData.fatherName}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="dob">D.O.B:</label>
            <input
              type="date"
              id="dob"
              name="dob"
              value={formData.dob}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="placeOfBirth">Place of Birth:</label>
            <input
              type="text"
              id="placeOfBirth"
              name="placeOfBirth"
              value={formData.placeOfBirth}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="community">Community:</label>
            <input
              type="text"
              id="community"
              name="community"
              value={formData.community}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Present Address:</label>
            <textarea
              name="presentAddress"
              value={formData.presentAddress}
              onChange={handleChange}
              rows="3"
            />
          </div>

          <div className="form-group">
            <label htmlFor="contactNumber">Contact Number:</label>
            <input
              type="tel"
              id="contactNumber"
              name="contactNumber"
              value={formData.contactNumber}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email ID:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Permanent Address:</label>
            <textarea
              name="permanentAddress"
              value={formData.permanentAddress}
              onChange={handleChange}
              rows="3"
            />
          </div>
        </div>

        <div className="form-section">
          <h3>Educational Qualification</h3>
          <div className="table-responsive">
            <table className="qualification-table">
              <thead>
                <tr>
                  <th>Qualification</th>
                  <th>Name of the School/College/University</th>
                  <th>Subject</th>
                  <th>Year of Passing</th>
                  <th>% of Marks</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>10th</td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.tenth.institution}
                      onChange={(e) => handleQualificationChange('tenth', 'institution', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.tenth.subject}
                      onChange={(e) => handleQualificationChange('tenth', 'subject', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.tenth.year}
                      onChange={(e) => handleQualificationChange('tenth', 'year', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.tenth.marks}
                      onChange={(e) => handleQualificationChange('tenth', 'marks', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>12th</td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.twelfth.institution}
                      onChange={(e) => handleQualificationChange('twelfth', 'institution', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.twelfth.subject}
                      onChange={(e) => handleQualificationChange('twelfth', 'subject', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.twelfth.year}
                      onChange={(e) => handleQualificationChange('twelfth', 'year', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.twelfth.marks}
                      onChange={(e) => handleQualificationChange('twelfth', 'marks', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Degree</td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.degree.institution}
                      onChange={(e) => handleQualificationChange('degree', 'institution', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.degree.subject}
                      onChange={(e) => handleQualificationChange('degree', 'subject', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.degree.year}
                      onChange={(e) => handleQualificationChange('degree', 'year', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.degree.marks}
                      onChange={(e) => handleQualificationChange('degree', 'marks', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Master Degree</td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.master.institution}
                      onChange={(e) => handleQualificationChange('master', 'institution', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.master.subject}
                      onChange={(e) => handleQualificationChange('master', 'subject', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.master.year}
                      onChange={(e) => handleQualificationChange('master', 'year', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.master.marks}
                      onChange={(e) => handleQualificationChange('master', 'marks', e.target.value)}
                    />
                  </td>
                </tr>
                <tr>
                  <td>Others</td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.others.institution}
                      onChange={(e) => handleQualificationChange('others', 'institution', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.others.subject}
                      onChange={(e) => handleQualificationChange('others', 'subject', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.others.year}
                      onChange={(e) => handleQualificationChange('others', 'year', e.target.value)}
                    />
                  </td>
                  <td>
                    <input
                      type="text"
                      value={formData.qualifications.others.marks}
                      onChange={(e) => handleQualificationChange('others', 'marks', e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        <div className="form-section">
          <div className="form-group">
            <label>Course Opted for:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="radio"
                  name="courseOpted"
                  value="UPSC"
                  checked={formData.courseOpted === 'UPSC'}
                  onChange={handleChange}
                />
                UPSC
              </label>
              <label>
                <input
                  type="radio"
                  name="courseOpted"
                  value="TNPSC"
                  checked={formData.courseOpted === 'TNPSC'}
                  onChange={handleChange}
                />
                TNPSC
              </label>
              <label>
                <input
                  type="radio"
                  name="courseOpted"
                  value="Others"
                  checked={formData.courseOpted === 'Others'}
                  onChange={handleChange}
                />
                Others
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Preliminary:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="preliminary.gs"
                  checked={formData.preliminary.gs}
                  onChange={handleChange}
                />
                G.S.
              </label>
              <label>
                <input
                  type="checkbox"
                  name="preliminary.csat"
                  checked={formData.preliminary.csat}
                  onChange={handleChange}
                />
                CSAT
              </label>
              <label>
                <input
                  type="checkbox"
                  name="preliminary.gsTestBatch"
                  checked={formData.preliminary.gsTestBatch}
                  onChange={handleChange}
                />
                GS Test Batch
              </label>
              <label>
                <input
                  type="checkbox"
                  name="preliminary.csatTestBatch"
                  checked={formData.preliminary.csatTestBatch}
                  onChange={handleChange}
                />
                CSAT Test Batch
              </label>
            </div>
          </div>

          <div className="form-group">
            <label>Main:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="main.gs"
                  checked={formData.main.gs}
                  onChange={handleChange}
                />
                G.S.
              </label>
              <label>
                <input
                  type="checkbox"
                  name="main.optional"
                  checked={formData.main.optional}
                  onChange={handleChange}
                />
                Optional
              </label>
              <label>
                <input
                  type="checkbox"
                  name="main.gsTestBatch"
                  checked={formData.main.gsTestBatch}
                  onChange={handleChange}
                />
                GS Test Batch
              </label>
              <label>
                <input
                  type="checkbox"
                  name="main.optionalTestBatch"
                  checked={formData.main.optionalTestBatch}
                  onChange={handleChange}
                />
                Optional Test Batch
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="optionalSubject">Optional Subject:</label>
            <input
              type="text"
              id="optionalSubject"
              name="optionalSubject"
              value={formData.optionalSubject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="otherSubject">Other Subject:</label>
            <input
              type="text"
              id="otherSubject"
              name="otherSubject"
              value={formData.otherSubject}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Interview:</label>
            <div className="checkbox-group">
              <label>
                <input
                  type="checkbox"
                  name="interview.coaching"
                  checked={formData.interview.coaching}
                  onChange={handleChange}
                />
                Coaching
              </label>
              <label>
                <input
                  type="checkbox"
                  name="interview.mockInterview"
                  checked={formData.interview.mockInterview}
                  onChange={handleChange}
                />
                Mock Interview
              </label>
              <label>
                <input
                  type="checkbox"
                  name="interview.upsc"
                  checked={formData.interview.upsc}
                  onChange={handleChange}
                />
                UPSC
              </label>
              <label>
                <input
                  type="checkbox"
                  name="interview.tnpsc"
                  checked={formData.interview.tnpsc}
                  onChange={handleChange}
                />
                TNPSC
              </label>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="howKnow">How do you know about Integration?</label>
            <input
              type="text"
              id="howKnow"
              name="howKnow"
              value={formData.howKnow}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-section instructions">
          <h3>Instructions</h3>
          <ol>
            <li>Classes will be held as per schedule.</li>
            <li>Extra classes may be held every week to cover the syllabus on time</li>
            <li>Weekly test will be conducted and the candidates should attend without fail.</li>
            <li>The fees paid will not be refunded under any circumstances.</li>
            <li>Institute has the complete right to claim your success.</li>
            <li>Necessary documents should be submitted at the time of admission.</li>
            <li>Discipline and decorum should be maintained within the premises.</li>
          </ol>
        </div>

        <div className="form-section">
          <div className="form-group declaration">
            <label>
              <input
                type="checkbox"
                name="declaration"
                checked={formData.declaration}
                onChange={(e) => setFormData({...formData, declaration: e.target.checked})}
              />
              I promise that the above information furnished by me is true and correct to the best of my knowledge.
            </label>
          </div>

          <div className="signature-section">
            <div className="form-group">
              <label htmlFor="place">Place:</label>
              <input
                type="text"
                id="place"
                name="place"
                value={formData.place}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="signatureDate">Date:</label>
              <input
                type="date"
                id="signatureDate"
                name="signatureDate"
                value={formData.signatureDate}
                onChange={handleChange}
              />
            </div>
            
            <div className="form-group">
              <label htmlFor="signatureUpload">Upload Signature:</label>
              <input
                type="file"
                id="signatureUpload"
                accept="image/*"
                onChange={handleSignatureUpload}
              />
              {formData.signature && (
                <div className="signature-preview">
                  <p>Signature Preview:</p>
                  <img src={formData.signature} alt="Signature" className="signature-image" />
                </div>
              )}
            </div>
          </div>
        </div>

        <button type="submit" className="submit-btn" disabled={!formData.declaration}>
          Submit Form
        </button>
      </form>

      <style jsx>{`
        .registration-form-container {
          font-family: Arial, sans-serif;
          max-width: 1000px;
          margin: 0 auto;
          padding: 20px;
          border: 1px solid #ccc;
          background-color: #fff;
          box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
        }
        
        .form-header {
          text-align: center;
          margin-bottom: 20px;
          border-bottom: 2px solid #000;
          padding-bottom: 10px;
        }
        
        .form-header h1 {
          margin: 0;
          font-size: 28px;
          color: #2c3e50;
        }
        
        .form-header h2 {
          margin: 10px 0 0 0;
          font-size: 22px;
          color: #34495e;
        }
        
        .form-section {
          margin-bottom: 20px;
          padding: 15px;
          border: 1px solid #ddd;
          border-radius: 5px;
          background-color: #f9f9f9;
        }
        
        .form-group {
          margin-bottom: 15px;
        }
        
        label {
          display: block;
          font-weight: bold;
          margin-bottom: 5px;
          color: #2c3e50;
        }
        
        input[type="text"],
        input[type="email"],
        input[type="tel"],
        input[type="date"],
        input[type="file"],
        textarea {
          width: 100%;
          padding: 10px;
          border: 1px solid #ccc;
          border-radius: 4px;
          box-sizing: border-box;
          font-size: 16px;
        }
        
        .checkbox-group {
          display: flex;
          flex-wrap: wrap;
          gap: 15px;
        }
        
        .checkbox-group label {
          display: flex;
          align-items: center;
          font-weight: normal;
        }
        
        .checkbox-group input[type="checkbox"],
        .checkbox-group input[type="radio"] {
          margin-right: 5px;
        }
        
        .table-responsive {
          overflow-x: auto;
        }
        
        .qualification-table {
          width: 100%;
          border-collapse: collapse;
          margin-bottom: 15px;
          min-width: 600px;
        }
        
        .qualification-table th,
        .qualification-table td {
          border: 1px solid #ddd;
          padding: 10px;
          text-align: left;
        }
        
        .qualification-table th {
          background-color: #2c3e50;
          color: white;
          font-weight: bold;
        }
        
        .qualification-table input {
          width: 100%;
          padding: 5px;
          border: 1px solid #ddd;
          border-radius: 3px;
          background: transparent;
        }
        
        .instructions ol {
          padding-left: 20px;
        }
        
        .instructions li {
          margin-bottom: 8px;
          line-height: 1.5;
        }
        
        .declaration label {
          display: flex;
          align-items: center;
          font-weight: normal;
        }
        
        .declaration input[type="checkbox"] {
          margin-right: 10px;
          width: auto;
        }
        
        .signature-section {
          display: flex;
          flex-wrap: wrap;
          gap: 20px;
        }
        
        .signature-section .form-group {
          flex: 1;
          min-width: 200px;
        }
        
        .signature-preview {
          margin-top: 10px;
        }
        
        .signature-image {
          max-width: 200px;
          max-height: 100px;
          border: 1px solid #ccc;
          margin-top: 5px;
        }
        
        .submit-btn {
          background-color: #2c3e50;
          color: white;
          padding: 15px 30px;
          border: none;
          border-radius: 4px;
          cursor: pointer;
          font-size: 18px;
          display: block;
          margin: 20px auto;
          width: 100%;
          max-width: 300px;
          transition: background-color 0.3s;
        }
        
        .submit-btn:hover:not(:disabled) {
          background-color: #1a252f;
        }
        
        .submit-btn:disabled {
          background-color: #95a5a6;
          cursor: not-allowed;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
          .registration-form-container {
            padding: 10px;
          }
          
          .form-header h1 {
            font-size: 24px;
          }
          
          .form-header h2 {
            font-size: 20px;
          }
          
          .qualification-table {
            font-size: 14px;
          }
          
          .qualification-table th,
          .qualification-table td {
            padding: 8px 5px;
          }
          
          .checkbox-group {
            flex-direction: column;
            gap: 10px;
          }
          
          .signature-section {
            flex-direction: column;
            gap: 15px;
          }
        }
        
        @media (max-width: 480px) {
          .form-section {
            padding: 10px;
          }
          
          .qualification-table {
            font-size: 12px;
          }
          
          input[type="text"],
          input[type="email"],
          input[type="tel"],
          input[type="date"],
          input[type="file"],
          textarea {
            padding: 8px;
            font-size: 14px;
          }
          
          .submit-btn {
            padding: 12px 20px;
            font-size: 16px;
          }
        }
      `}</style>
    </div>
  );
};

export default Register; 