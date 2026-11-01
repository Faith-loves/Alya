export type Priority = "low" | "medium" | "high";
export type Task = { id:string; title:string; notes?:string; dueDate:string; priority:Priority; completed:boolean; createdAt:string; updatedAt:string; };
export type ApplicationStatus = "Applied" | "Screening" | "Assessment" | "Interview" | "Offer" | "Rejected" | "Withdrawn";
export type JobApplication = { id:string; company:string; role:string; url?:string; location?:string; status:ApplicationStatus; appliedDate:string; followUpDate?:string; notes?:string; createdAt:string; updatedAt:string; };
