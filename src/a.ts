type Employee={
    name:string;
    startDate:Date;
};

type Manager={
    name:string;
    department:string;
}
type TeamLead=Employee&Manager;
const teamlead:TeamLead={
    name:"ADSAS",
    startDate:new Date(),
    department:"software"
}
