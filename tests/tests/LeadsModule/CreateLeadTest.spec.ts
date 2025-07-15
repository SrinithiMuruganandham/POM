import { test } from "@playwright/test";
import { ViewLeadPage } from "../../../pages/pages/06-viewLeadPage";

test("Create LeadVerification",async ({page}) => {
    const Lp= new ViewLeadPage(page)
    await Lp.loadurl("http://leaftaps.com/opentaps/control/login");
    await Lp.enterCredentials("demoSalesManager","crmsfa");
    await Lp.clickLogin();
    await Lp.clickCRM()
    await Lp.clickLead()
    await Lp.clickCreateLead()
    await Lp.enterMandatorydetails()
    await Lp.clickSubmit()
    await Lp.verifyFirstName();
    
})