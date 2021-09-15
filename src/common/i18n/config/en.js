export default {
    message: {
        hello: "hello world"
    },
    // 公共字段
    common: {
        reset: "Reset",
        sure:"Sure",
        search: "Inquire",
        cancel:"Cancel",
        copy:"Copy",
        edit:"Edit",
        save:"Save",
        searchTime1: "Last 3 months",
        searchTime2: "Last 6 months",
        searchTime3: "Last year",
        searchTime4: "Today",
        searchTime5: "Last 7 days",
        searchTime6: "Last 30 days",
        searchTime7: "Day",
        searchTime8: "Week",
        searchTime9: "Month",
        searchTime10: "Season",
        searchTime11: "Half A Year",
        searchTime12: "Year",
        exportPage: "Generate Report",
        kefu:"Customer Service",
        helpCenter:"Help Center",
        feedback:"Feedback / Suggestions",
        notice:"Notice",
        userInfo:"Personal Information",
        loginOut:"Logout",
        exit:"Exit",
        cancelExit:"Cancel Exit",
        add: "Add",
        delete:"Delete"
    },
    // 账户中心
    acount: {
        mainAsideName:"Financial",
        asideName:"Account center",
        title: "Account information",
        title1: "Account details",
        recharge: "Recharge",
        moneyLi1: "The total amount of commission to be settled",
        moneyLi2: "The total amount of commission to be settled",
        moneyLi3: "Accumulated Commission Amount",
        moneyLi4: "Amount in withdrawal",
        moneyLi5: "Account Balance",
        searchName1: "Order number",
        searchName2: "Task number",
        searchName3: "Transaction Type",
        selectSearch:{
            name1:'All',
            name2:'Commission expenses',
            name3:'Commission income',
            name4:'Recharge income'
        },
        table: {
            name1: "Serial number",
            name2: "Order Number",
            name3: "Transaction amount",
            name4: "Account balance",
            name5: "Payment method",
            name6: "Payment date"
        },
        tip: " If the balance is less than $100, we will suspend your service; in order not to affect your business, please recharge in time to ensure that the account has sufficient balance."
    },
    // 营销计划
    plans: {
        asideName:"Marketing Plan",
        minTitle1: 'In progress',
        minTitle2: 'Completed',
        search:{
            name1:"Referral ID",
            name2:"Product",
            name3:"Status"
        },
        select:{
            name1:"All",
            name2:"In progress",
            name3:"Completed"
        },
        title:"List commission",
        button:{
            detail:"detail",
            end:"end"
        },
        status:{
           name1:"In progress",
           name2:"Completed" 
        },
        table:{
            name1: "Referral ID",
            name2: "Product",
            name3: "Status",
            name4: "Commission rate(%)",
            name5: "Quantity",
            name6: "Commission($)",
            name7: "Create at",
            name8: "Actions"
        },
        boxs:{
            title:"detail",
            formItem1:"Product Link",
            formItem2:"Coupon Link"
        }
    },
    // 个人中心
    setPersion: {
        title: "Personal Information",
        title1: "Account settings",
        tip1:"Read and agree",
        tip2:"Platform bank binding authentication protocol",
        form: {
            name: "Agency",
            name1: "Phone number",
            name2: "Email",
            name3: "country / region",
            name4: "Language",
            name5: "Functional currency",
            name6: "Birthday",
            name7: "Gender",
            gender:{
                name1:"Female",
                name2:"Male",
                name3:"Unknown"
            },
            name8: "If accept only commision",
            name9: "Media Name",
            name10: "Media ID",
            name11: "Number of fans",
            name12: "Promotion cost",
            name13: "Home page link",
            name14: "Introduction"
        },
        form1:{
            name1:"Account balance",
            name2:"Withdrawal",
            name3:"Please select the following method to bind the account",
            name4:"Personal Bank Account",
            name5:"Paypal Account",
            name6:"Corporate Account",
            name7:"Country or Region",
            name8:"Receiving Bank Name",
            name9:"Receiving Bank Address (branch address)",
            name10:"Bank Routing / Swift Code (international wires)",
            name11:"Beneficiary Account Number ",
            name12:"Repeat Beneficiary Account Number ",
            name13:"Beneficiary Account Name",
            name14:"Beneficiary Account Address",
            name15:"Contact Phone Number",
            name16:"Verification Code",
            name17:"Get verification code",
        },
        total:{
            delete:"Invalid deletion",
            edit:"Modified successfully"
        }
    },
    // 订单中心
    orderCenter:{
        asideName:"Order Details",
        asideName1:"Order Center",
        form:{
            name1:"Total amount of goods paid Commission",
            name2:"Total commission paid",
            name3:"Account balance",
            name4:"Total Commission",
            name5:"Total amount of commission goods",
        },
        form2:{
            label1:"Order No",
            label2:"Receiving country",
        },
        tab:{
            name1:"Paid",
            name2:"Authorized",
            name3:"Unpaid",
            name4:"Partial payment",
            name5:"Refunded",
            name6:"Invalid",
            name7:"Partial refund",
            name8:"Partial authorization and payment"
        },
        table:{
            name1:"Order No",
            name2:"Order status",
            name3:"Trade name",
            name4:"SKU",
            name5:"Quantity of goods",
            name6:"Item pricing($)",
            name7:"Order amount($)",
            name8:"Preferential amount($)",
            name9:"Commission amount($)",
            name10:"Buyer ID",
            name11:"Receiving country",
            name12:"Creation time"
        }
    }
}