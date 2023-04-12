import {useState} from "react";
import Edit from "../icons/edit";
import Delete from "../icons/delete";

export default function TotalContacts() {
    const [isFocused, setIsFocused] = useState(Array(9).fill(false));
    const [edit, setEdit] = useState(-1)
    const [editContact, setEditContact] = useState()

    const [contacts, setContacts] = useState([{
        clientID: '0',
        clientName: 'Entity name',
        TRN_PPSN: '654321',
        yearEnd: '23/06/22',
        ARD: '23/06/22',
        companyNumber: '123456789',
        email: 'email1234@gmail.com',
        phoneNumber: '7674822811',
        companyAddress: '10 Name Street'
    }, {
        clientID: '1',
        clientName: 'Entity name',
        TRN_PPSN: '654321',
        yearEnd: '23/06/22',
        ARD: '23/06/22',
        companyNumber: '123456789',
        email: 'email1234@gmail.com',
        phoneNumber: '7674822811',
        companyAddress: '10 Name Street'
    }])

    const handleDelete = (index) => {
        let c = JSON.parse(JSON.stringify(contacts))
        c.splice(index, 1)
        setContacts(c)
    }

    const handleEdit = (index) => {
        setEdit(index)
        setEditContact(contacts[index])
    }

    const handleFocused = (index, bool) => {
        let f = JSON.parse(JSON.stringify(isFocused))
        f[index] = bool
        setIsFocused(f)
    }

    const handleChange = (key, value) => {
        let ec = JSON.parse(JSON.stringify(editContact))
        ec[key] = value
        setEditContact(ec)
    }

    const handleOK = () => {
        let c = JSON.parse(JSON.stringify(contacts))
        c[edit] = editContact
        setContacts(c)
        setEditContact(null)
        setEdit(-1)
    }

    const handleAdd = () => {
        let newContact = {
            clientID: '',
            clientName: '',
            TRN_PPSN: '',
            yearEnd: '',
            ARD: '',
            companyNumber: '',
            email: '',
            phoneNumber: '',
            companyAddress: ''
        }
        setContacts([...contacts, newContact])
        setEdit(contacts.length)
        setEditContact(newContact)
    }

    return (<div className="main-container">
        <div className="top-contacts-container">
            <h1>Total Contacts</h1>
            <div className="button-submit" onClick={handleAdd}>Add +</div>
        </div>

        <table style={{borderCollapse: 'collapse', width: '100%'}}>
            <tr className="table-header">
                {['Client ID', 'Client name', 'TRN/PPSN', 'Year end', 'ARD', 'Company number', 'Email', 'Phone number', 'Company address', 'Action']
                    .map((item, index) => <th key={index} style={{border: index === 0 ? 0 : ""}}>{item}</th>)}
            </tr>
            {contacts.map((item, index) => <tr key={index} className='table-body'>
                {edit !== index ? <>
                    <td>{item.clientID}</td>
                    <td>{item.clientName}</td>
                    <td>{item.TRN_PPSN}</td>
                    <td>{item.yearEnd}</td>
                    <td>{item.ARD}</td>
                    <td>{item.companyNumber}</td>
                    <td>{item.email}</td>
                    <td>{item.phoneNumber}</td>
                    <td>{item.companyAddress}</td>
                    <td className="button-submit edit-button" onClick={() => handleEdit(index)}><Edit/>
                    </td>
                    <td className="button-submit delete-button" onClick={() => handleDelete(index)}><Delete/>
                    </td>
                </> : <>
                    <div className={isFocused[0] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('clientID', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(0, true)}
                               onBlur={() => handleFocused(0, false)}
                               type="text"
                               defaultValue={item.clientID}/>
                    </div>
                    <div className={isFocused[1] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('clientName', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(1, true)}
                               onBlur={() => handleFocused(1, false)}
                               type="text"
                               defaultValue={item.clientName}/>
                    </div>
                    <div className={isFocused[2] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('TRN_PPSN', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(2, true)}
                               onBlur={() => handleFocused(2, false)}
                               type="text"
                               defaultValue={item.TRN_PPSN}/>
                    </div>
                    <div className={isFocused[3] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('yearEnd', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(3, true)}
                               onBlur={() => handleFocused(3, false)}
                               type="text"
                               defaultValue={item.yearEnd}/>
                    </div>
                    <div className={isFocused[4] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('ARD', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(4, true)}
                               onBlur={() => handleFocused(4, false)}
                               type="text"
                               defaultValue={item.ARD}/>
                    </div>
                    <div className={isFocused[5] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('companyNumber', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(5, true)}
                               onBlur={() => handleFocused(5, false)}
                               type="text"
                               defaultValue={item.companyNumber}/>
                    </div>
                    <div className={isFocused[6] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('email', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(6, true)}
                               onBlur={() => handleFocused(6, false)}
                               type="text"
                               defaultValue={item.email}/>
                    </div>
                    <div className={isFocused[7] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('phoneNumber', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(7, true)}
                               onBlur={() => handleFocused(7, false)}
                               type="text"
                               defaultValue={item.phoneNumber}/>
                    </div>
                    <div className={isFocused[8] ? "active-registration-form__group" : "registration-form__group"}
                         style={{width: 'calc(10% - 2px)', margin: 1}}>
                        <input className="registration-form__input"
                               onChange={(e) => handleChange('companyAddress', e.target.value)}
                               style={{width: '100%', padding: 0, fontSize: 16}}
                               onFocus={() => handleFocused(8, true)}
                               onBlur={() => handleFocused(8, false)}
                               type="text"
                               defaultValue={item.companyAddress}/>
                    </div>

                    <td className="button-submit save-button" onClick={() => handleOK(index)}>save
                    </td>
                    <td className="button-submit delete-button" onClick={() => handleDelete(index)}><Delete/>
                    </td>
                </>}
            </tr>)}
        </table>
    </div>)
}
