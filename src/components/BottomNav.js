import React from "react";
import PageDeliveryGroceries from "./PageDeliveryGroceries";
import PageDeliveryTakeout from "./PageDeliveryTakeout";
import PageDeliverySupplies from "./PageDeliverySupplies";
import PageDeliveryMedication from "./PageDeliveryMedication";
import PageNearbyBuses from "./PageNearbyBuses";
/*
import PageNearbyRecreation from "./PageNearbyRecreation";
import PageNearbyShopping from "./PageNearbyShopping";
import PageNearbyMedical from "./PageNearbyMedical";
*/

const BottomNav = ({page, updateSubpageContent}) => {

    const ShowSubpage = (subpage) => {
        switch(subpage) {
            case "Groceries": return updateSubpageContent(<PageDeliveryGroceries />);
            case "Takeout": return updateSubpageContent(<PageDeliveryTakeout />);
            case "Supplies": return updateSubpageContent(<PageDeliverySupplies />);
            case "Medication": return updateSubpageContent(<PageDeliveryMedication />);
            case "Buses": return updateSubpageContent(<PageNearbyBuses />);
            /*
            case "Recreation": return updateSubpageContent(<PageNearbyRecreation />);
            case "Shopping": return updateSubpageContent(<PageNearbyShopping />);
            case "Medical": return updateSubpageContent(<PageNearbyMedical />);
            */
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
                "shopping_cart",
                "takeout_dining",
                "handyman",
                "prescriptions"
            ],
            nearby: [
                "directions_bus",
                "sports_tennis",
                "shopping_bag",
                "medical_services"
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