export interface TeamMember { id: string; fullName: string | null; email?: string | null; role?: string | null; }
export interface CorporateLicence { id:string; operatorName:string; category:string; licenceType:string; licenceNumber:string; status:string; issuedDate:string; expiryDate:string; renewalDeadline:string; conditions?:string|null; regulatoryBody?:string|null; isNewlyCapturedGOSS?:boolean; }
export interface RegulatedIndividual { id:string; executiveName:string; regulatedFunction:string; registrationReference:string; fitAndProperStatus:string; localResident:boolean; ddStatus:string; ddProviderRef?:string|null; notes?:string|null; grantedDate:string; expiryDate:string; part5InForce:boolean; legalBasis?:string|null; lastAttestationDate?:string|null; nextAttestationDue?:string|null; daysUntilAttestation?:number|null; }
export interface VendorSupplier { id:string; supplierName:string; category?:string; service?:string; licenceStatus?:string; riskRating?:string; nextReviewDate?:string|null; notes?:string|null; [key:string]:any; }
export interface SubstanceDocument { id:string; title?:string; category?:string; documentType?:string; uploadedAt?:string; reviewStatus?:string; reviewDate?:string|null; [key:string]:any; }
export interface SubstanceRecord { id:string; [key:string]:any; }
export interface BoardMinute { id:string; meetingDate?:string; title?:string; [key:string]:any; }
export interface CalendarEvent { id:string; title:string; dueDate:string; status?:string; category?:string; completedAt?:string|null; [key:string]:any; }
export interface AuditLogEntry { id:string; action?:string; entityType?:string; createdAt?:string; userName?:string|null; details?:any; [key:string]:any; }
export interface QuarterlyReport { id:string; templateId:string; period:string; status:string; signedAt?:string|null; data?:Record<string,any>; [key:string]:any; }
export interface ReportTemplate { id:string; name:string; schema:any[]; [key:string]:any; }
export interface AuditorClientLink { id:string; firmName:string; status:string; accessLevel:string; [key:string]:any; }
export interface ExternalInvite { id:string; [key:string]:any; }
export type AuditorAccessLevel = string;
