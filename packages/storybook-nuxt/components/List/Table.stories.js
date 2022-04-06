export default {
    title: 'ReviewsTable'
}

// 👇 We create a “template” of how args map to rendering
const Template = (args, { argTypes }) => ({
    props: Object.keys(argTypes),
    template: '<ListTable v-bind="$props" />',
});

//👇 Each story then reuses that template
export const Primary = Template.bind({});

Primary.args = {
    headers: [
        { "text": "Reviewer Name", "align": "start", "value": "reviewerName" },
        { "text": "Reviewed", "align": "start", "value": "reviewedName" },
        { "text": "Score", "align": "center", "value": "score" },
        { "text": "Average Stars", "align": "center", "sortable": false, "value": "stars" },
        { "text": "reviewedType", "value": "reviewedType" },
        { "text": "providerType", "value": "providerType" },
        { "text": "timeUtility", "value": "timeUtility" },
        { "text": "servicesUtility", "value": "servicesUtility" },
        { "text": "responseTime", "value": "responseTime" },
        { "text": "payments", "value": "payments" },
        { "text": "sales", "value": "sales" },
        { "text": "profit", "value": "profit" },
        { "text": "bookings", "value": "bookings" },
        { "text": "createdAt", "value": "createdAt" }],
    items: [
        { "reviewerName": "Zola Treutel", "reviewedName": "Table Services", "reviewedType": "services", "timeUtility": 23931, "profit": 117218, "bookings": 90, "createdAt": "2017-10-29T23:55:14.015Z", "stars": "0.0" },
        { "reviewerName": "System", "reviewedName": "Zola Treutel", "reviewedType": "providers", "providerType": "operational", "responseTime": 785, "createdAt": "2018-05-20T01:31:38.060Z", "stars": "0.0" },
        { "reviewerName": "System", "reviewedName": "Steel Supplier", "reviewedType": "suppliers", "responseTime": 12994, "createdAt": "2012-08-07T13:04:39.111Z", "stars": "0.0" },
        { "reviewerName": "System", "reviewedName": "Zola Treutel", "reviewedType": "providers", "providerType": "operational", "responseTime": 875, "createdAt": "2014-11-11T09:18:22.674Z", "stars": "0.0" },
        { "reviewerName": "System", "reviewedName": "Hat Services", "reviewedType": "services", "timeUtility": 25552, "profit": 278808, "bookings": 302, "createdAt": "2017-10-02T19:23:02.113Z", "stars": "0.0" },
        { "reviewerName": "Tamara Flatley", "reviewedName": "Hat Services", "reviewedType": "services", "timeUtility": 61663, "profit": 68988, "bookings": 536, "createdAt": "2017-06-17T08:33:54.839Z", "stars": "0.0" },
        { "reviewerName": "Jennings Hermann", "reviewedName": "Hat Services", "reviewedType": "services", "timeUtility": 35817, "profit": 3302, "bookings": 141, "score": 1, "createdAt": "2014-02-03T18:20:23.455Z", "stars": "0.1" },
        { "reviewerName": "Lincoln Daugherty", "reviewedName": "Soft Supplier", "reviewedType": "suppliers", "responseTime": 578, "score": 1, "createdAt": "2021-11-19T14:09:17.342Z", "stars": "0.1" },
        { "reviewerName": "Kiley Goodwin", "reviewedName": "Wooden Supplier", "reviewedType": "suppliers", "responseTime": 12921, "score": 1, "createdAt": "2021-10-12T14:01:02.941Z", "stars": "0.1" },
        { "reviewerName": "System", "reviewedName": "Table Services", "reviewedType": "services", "timeUtility": 85563, "profit": 297920, "bookings": 395, "score": 1, "createdAt": "2017-10-21T14:31:28.677Z", "stars": "0.1" }],
    itemCount: 10
};

export const NuxtWebsite = () => '<ListTable />'