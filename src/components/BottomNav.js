import React from "react";
import PageDeliveryGroceries from "./PageDeliveryGroceries";
import PageDeliveryTakeout from "./PageDeliveryTakeout";
import PageDeliverySupplies from "./PageDeliverySupplies";
import PageDeliveryMedication from "./PageDeliveryMedication";

const BottomNav = ({page, updateSubpageContent}) => {

    const ShowSubpage = (subpage) => {
        switch(subpage) {
            case "Groceries": return updateSubpageContent(<PageDeliveryGroceries />);
            case "Takeout": return updateSubpageContent(<PageDeliveryTakeout />);
            case "Supplies": return updateSubpageContent(<PageDeliverySupplies />);
            case "Medication": return updateSubpageContent(<PageDeliveryMedication />);
            default: return;
        }
    }

    let navData = {
        subpage: {
            delivery: [
                "Groceries",
                "Takeout",
                "Supplies",
                "Medication"
            ],
            nearby: [
                "Buses",
                "Recreation",
                "Shopping",
                "Medical"
            ],
            bookings: [
                "Taxis",
                "Restaurant",
                "Appointment",
                "Flights"
            ],
            contact: [
                "Emergency",
                "Non Emergency",
                "Home Services",
                "Techie App Team"
            ]
        },
        icon: {
            delivery: [
                "",
                "",
                "",
                ""
            ],
            nearby: [
                "",
                "",
                "",
                ""
            ],
            bookings: [
                "",
                "",
                "",
                ""
            ],
            contact: [
                "",
                "",
                "",
                ""
            ]
        }
    }

    return (
        <>
            <div className="vh-12"></div>
            <nav className="fixed-bottom btn vh-12 bg-body border-top d-flex flex-row justify-content-evenly">
                <button className="btn" onClick={ () => (ShowSubpage(navData.subpage[page][0])) }>
                    <span className="material-symbols-outlined">{navData.icon[page][0]}</span>
                    <p>{navData.subpage[page][0]}</p>
                </button>
                <button className="btn" onClick={ () => (ShowSubpage(navData.subpage[page][1])) }>
                    <span className="material-symbols-outlined">{navData.icon[page][1]}</span>
                    <p>{navData.subpage[page][1]}</p>
                </button>
                <button className="btn" onClick={ () => (ShowSubpage(navData.subpage[page][2])) }>
                    <span className="material-symbols-outlined">{navData.icon[page][2]}</span>
                    <p>{navData.subpage[page][2]}</p>
                </button>
                <button className="btn" onClick={ () => (ShowSubpage(navData.subpage[page][3])) }>
                    <span className="material-symbols-outlined">{navData.icon[page][3]}</span>
                    <p>{navData.subpage[page][3]}</p>
                </button>
            </nav>
        </>
    );
}
 
export default BottomNav;