import React from 'react';

export const LockIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
  </svg>
);

export const KeyIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 7a2 2 0 012 2m4 0a6 6 0 01-7.743 5.743L11 17H9v2H7v2H5v-2H3v-2H1v-4a6 6 0 0110.257-4.257" />
  </svg>
);

export const ChatIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);

export const RefreshIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120 12M20 20l-1.5-1.5A9 9 0 004 12" />
  </svg>
);

export const CogIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066 2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
  </svg>
);

export const QuestionIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const InfoIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-3" fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
  </svg>
);

export const CloseIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
  </svg>
);

export const BellIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
    </svg>
);

export const UserCircleIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const SettingsAltIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-gray-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066 2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const MenuIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" /></svg>;
export const InfoIconV2 = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 8v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>;
export const ProgressIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>;
export const VisitsIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
// Fix: Updated CoursesIcon to accept a className prop to resolve usage error.
export const CoursesIcon = ({ className = 'h-5 w-5 mr-3' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 14v3m4-3v3m4-3v3M3 21h18M3 10h18M3 7l9-4 9 4M4 10h16v11H4V10z" /></svg>;
export const ClassesIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path d="M12 14l9-5-9-5-9 5 9 5z" /><path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-5.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222 4 2.222V20" /></svg>;
export const ModulesIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z" /></svg>;
export const AddIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v3m0 0v3m0-3h3m-3 0H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const DocumentsIcon = ({ className = 'h-5 w-5 mr-3' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" /></svg>;
export const TraineeIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 16l-4-4m0 0l4-4m-4 4h12m6 4a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const OurTraineesIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M15 21v-1a6 6 0 00-1.78-4.125a4 4 0 00-6.44 0A6 6 0 003 20v1h12z" /></svg>;
export const AssetControlIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" /></svg>;
export const ClickIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}><path strokeLinecap="round" strokeLinejoin="round" d="M15.5 16.5a1.5 1.5 0 01-3 0V11a1.5 1.5 0 013 0v5.5zM12.5 15v-4a1.5 1.5 0 013 0v4m-6-3.5v-1a1.5 1.5 0 013 0v1m-6 0v-1a1.5 1.5 0 013 0v1m-3.5-6.5a1 1 0 01-1-1v-1a1 1 0 112 0v1a1 1 0 01-1 1z" /><path strokeLinecap="round" strokeLinejoin="round" d="M18 19.5H6.75C5.7835 19.5 5 18.7165 5 17.75V8.75C5 7.7835 5.7835 7 6.75 7H18c.9665 0 1.75.7835 1.75 1.75v9c0 .9665-.7835 1.75-1.75 1.75z" /></svg>;
export const UpArrowIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" /></svg>;
export const BooksIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24" fill="none" viewBox="0 0 64 64"><path fill="#F44336" d="M14 42h40v6H14z" /><path fill="#FF9800" d="M14 34h40v6H14z" /><path fill="#4CAF50" d="M14 26h40v6H14z" /><path fill="#2196F3" d="M14 18h40v6H14z" /></svg>;
export const AddCircleIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" /></svg>;
export const EditIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.5L15.232 5.232z" /></svg>;
export const PrintIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 17h2a2 2 0 002-2v-4a2 2 0 00-2-2H7a2 2 0 00-2 2v4a2 2 0 002 2h2m8 0v2a2 2 0 01-2 2H9a2 2 0 01-2-2v-2m8 0H9m6-4v-3a2 2 0 00-2-2H9a2 2 0 00-2 2v3" /></svg>;
export const SavePdfIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" /></svg>;
export const OpenFolderIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 7v10a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-6l-2-2H5a2 2 0 00-2 2z" /></svg>;
export const WarningIcon = () => <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-yellow-500" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" /></svg>;
export const ExclamationIcon = ({ className = "h-5 w-5" }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>;
export const PaperclipIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.172 7l-6.586 6.586a2 2 0 102.828 2.828l6.414-6.586a4 4 0 00-5.656-5.656l-6.415 6.585a6 6 0 108.486 8.486L20.5 13" />
    </svg>
);

export const GraduationCapIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-white opacity-70" viewBox="0 0 20 20" fill="currentColor">
    <path d="M10.394 2.08a1 1 0 00-.788 0l-7 3.5a1 1 0 00.002 1.788l.537.268a2 2 0 011.732 0l4.286 2.142a2 2 0 001.732 0l4.286-2.142a2 2 0 011.732 0l.537-.268a1 1 0 00.002-1.788l-7-3.5z" />
    <path fillRule="evenodd" d="M3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
  </svg>
);

export const ShieldIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" className="h-24 w-24 text-yellow-400 opacity-80" viewBox="0 0 20 20" fill="currentColor">
    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v2.586l-1.293-1.293a1 1 0 00-1.414 1.414l3 3a1 1 0 001.414 0l3-3a1 1 0 00-1.414-1.414L11 7.586V5z" clipRule="evenodd" />
    <path d="M10.707 3.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L10 5.414l6.293 6.293a1 1 0 001.414-1.414l-7-7z" />
     <path fillRule="evenodd" d="M10 1.5c-4.694 0-8.5 3.806-8.5 8.5s3.806 8.5 8.5 8.5 8.5-3.806 8.5-8.5S14.694 1.5 10 1.5zM9 13.5V9.75a1 1 0 01.5-.866l3-1.732a1 1 0 111 1.732L11 10.233V13.5a1 1 0 11-2 0z" clipRule="evenodd" />
      <path d="M12.5 8a.5.5 0 100-1 .5.5 0 000 1zM11 10.25a.5.5 0 11-1 0 .5.5 0 011 0zM10 12.5a.5.5 0 100-1 .5.5 0 000 1z" />
       <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm-1.25-5.5a1.25 1.25 0 100-2.5 1.25 1.25 0 000 2.5z" clipRule="evenodd" />
        <path d="M10 3a7 7 0 100 14 7 7 0 000-14z" fill="#FBBF24" />
        <path d="M10 16.5a6.5 6.5 0 100-13 6.5 6.5 0 000 13z" fill="#FDE68A" />
        <path d="M11.5 11.065V8.5a.5.5 0 00-1 0v2.5a.5.5 0 00.276.447l2 1.155a.5.5 0 00.5-.866l-1.776-1.026z" fill="#92400E"/>
        <path d="M11.5 7.5a.5.5 0 10-1 0v3a.5.5 0 101 0v-3z" fill="#92400E" />
        <path d="M9.5 9.5a.5.5 0 10-1 0v1a.5.5 0 101 0v-1z" fill="#92400E"/>
  </svg>
);

// Icons for Documents Page
export const LargeDocumentsIcon = () => (
  <svg className="h-32 w-32 text-white/50" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15 54C11.6863 54 9 51.3137 9 48V21C9 17.6863 11.6863 15 15 15H36.75L45 23.25V48C45 51.3137 42.3137 54 39 54H15Z" opacity="0.6"/>
    <path d="M21 45C17.6863 45 15 42.3137 15 39V12C15 8.68629 17.6863 6 21 6H40L51 17V39C51 42.3137 48.3137 45 45 45H21Z"/>
    <path d="M40 6L51 17H43C41.3431 17 40 15.6569 40 14V6Z" fill="#E0F2F1" fillOpacity="0.7"/>
  </svg>
);

export const DeclarationIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E0F2F1"/>
        <path d="M14 16H34M14 24H34M14 32H26" stroke="#00897B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const CertificateIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E0F2F1"/>
        <path d="M34 14H18C15.7909 14 14 15.7909 14 18V34H34V14Z" fill="white"/>
        <path d="M34 14L28 20H14V18C14 15.7909 15.7909 14 18 14H34Z" fill="#B2DFDB"/>
        <path d="M34 14V20H28L34 14Z" fill="#00897B"/>
    </svg>
);

export const TraineeCardIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E0F2F1"/>
        <rect x="12" y="16" width="24" height="16" rx="2" fill="white"/>
        <circle cx="18" cy="22" r="2" fill="#00897B"/>
        <path d="M24 21H32M24 25H32" stroke="#00897B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const CourseEndReportIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E0F2F1"/>
        <rect x="12" y="15" width="24" height="18" rx="2" fill="white"/>
        <path d="M12 21H36" stroke="#00897B" strokeOpacity="0.5" strokeWidth="2"/>
        <path d="M19 12V18M29 12V18" stroke="#00897B" strokeOpacity="0.5" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="18" cy="26" r="1.5" fill="#00897B"/>
        <circle cx="24" cy="26" r="1.5" fill="#00897B"/>
        <circle cx="30" cy="26" r="1.5" fill="#00897B"/>
    </svg>
);

export const ManualInvoiceIcon = () => (
    <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect width="48" height="48" rx="8" fill="#E0F2F1"/>
        <rect x="12" y="12" width="24" height="24" rx="2" fill="white"/>
        <circle cx="29" cy="29" r="3" fill="#FBBF24"/>
        <circle cx="29" cy="29" r="1" fill="#F59E0B"/>
        <path d="M16 18H28M16 22H21" stroke="#00897B" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

// Icons for Payments Page
export const PaymentsIcon = ({ className = "h-5 w-5 mr-3" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h18M7 15h1m4 0h1m-7 4h12a2 2 0 002-2V9a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z" />
    </svg>
);

export const LargePaymentsIcon = () => (
  <svg className="h-32 w-32 text-white/50" viewBox="0 0 60 60" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M50 10H10C6.68629 10 4 12.6863 4 16V44C4 47.3137 6.68629 50 10 50H50C53.3137 50 56 47.3137 56 44V16C56 12.6863 53.3137 10 50 10Z" opacity="0.6"/>
    <path d="M4 24H56V20H4V24Z"/>
    <rect x="10" y="38" width="10" height="5" rx="2.5"/>
  </svg>
);

// Icons for Registration Form Page
export const SearchIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>;
export const ViewIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" /></svg>;
export const UserEditIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" /></svg>;
export const BackIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 10h10a8 8 0 018 8v2M3 10l6 6m-6-6l6-6" /></svg>;
export const UpdateIcon = ({className = 'h-5 w-5'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h5M20 20v-5h-5M4 4l1.5 1.5A9 9 0 0120 12M20 20l-1.5-1.5A9 9 0 004 12" /></svg>;
export const PhoneIcon = ({className = 'h-6 w-6'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" /></svg>;
export const PaymentDataIcon = ({className = 'h-6 w-6'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" /></svg>;
export const CourseDataIcon = ({className = 'h-6 w-6'}: {className?: string}) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;

// Icons for Trainee Profile Page
export const HeartIcon = ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.318a4.5 4.5 0 010-6.364z" /></svg>;
export const PersonRunningIcon = ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 9a2 2 0 11-4 0 2 2 0 014 0zm5.172 4.172a4 4 0 015.656 0M12 12l5.657 5.657" /></svg>;
export const CalendarIcon = ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>;
export const GenderIcon = ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m-4-8h8" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 4v0a3 3 0 013 3v0a3 3 0 013 3v0M9 20v0a3 3 0 003-3v0a3 3 0 003-3v0" /></svg>;
export const HomeIcon = ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>;
export const IdCardIcon = ({ className = 'h-5 w-5' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V8a2 2 0 00-2-2h-5m-4 0V5a2 2 0 012-2h2a2 2 0 012 2v1m-4 0h4" /></svg>;
export const NotesIcon = ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M9 16h.01" /></svg>;
export const FormationIcon = ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.653-.124-1.282-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.653.124-1.282.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0z" /></svg>;
export const QuoteIcon = ({ className = 'h-6 w-6' }: { className?: string }) => <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z" /></svg>;
export const AvatarPlaceholder = ({ className = 'h-24 w-24' }: { className?: string }) => (
    <div className={`rounded-full bg-blue-100 flex items-center justify-center ${className}`}>
        <svg className="h-16 w-16 text-blue-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
    </div>
);

export const PaymentsSectionIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg className={className} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="currentColor" strokeWidth="1.5">
        <rect x="3" y="6" width="18" height="12" rx="2" />
        <path d="M7 12H7.01" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M11 10V14" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M15 12H15.01" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
);

export const DollarSignIcon = ({ className = 'h-20 w-20 text-gray-300' }: { className?: string }) => (
    <svg className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2v20" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.25 8.5c0-2.071-1.679-3.75-3.75-3.75S7.75 6.429 7.75 8.5s1.679 3.75 3.75 3.75 3.75 1.679 3.75 3.75-1.679 3.75-3.75 3.75S7.75 17.571 7.75 15.5" />
    </svg>
);

// Icons for Our Trainees Page
export const UserGroupIcon = ({ className = 'h-24 w-24 text-white opacity-50' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="currentColor" viewBox="0 0 24 24">
        <path d="M12 12.75c3.31 0 6-2.69 6-6s-2.69-6-6-6-6 2.69-6 6 2.69 6 6 6zM12 14.25c-3.31 0-6 2.69-6 6v1.5h12v-1.5c0-3.31-2.69-6-6-6zM20.25 21.75h-1.5v-1.5c0-1.24-1.01-2.25-2.25-2.25s-2.25 1.01-2.25 2.25v1.5h-1.5v-1.5c0-2.07 1.68-3.75 3.75-3.75s3.75 1.68 3.75 3.75v1.5zM3.75 21.75h1.5v-1.5c0-1.24 1.01-2.25 2.25-2.25s2.25 1.01 2.25 2.25v1.5h1.5v-1.5c0-2.07-1.68-3.75-3.75-3.75S2.25 18.18 2.25 20.25v1.5z" opacity="0.5"/>
    </svg>
);

export const FilterListIcon = ({ className = "h-5 w-5" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 14a4 4 0 100-8 4 4 0 000 8z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 13.5l3.5 3.5" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 6h4m-4 4h7m-7 4h4" />
    </svg>
);

export const SearchUserIcon = ({ className = 'h-16 w-16 text-custom-teal-darker' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 64 64">
        <circle cx="28" cy="24" r="12" stroke="currentColor" strokeWidth="3"/>
        <path stroke="currentColor" strokeWidth="3" d="M38 34l8 8"/>
        <path stroke="currentColor" strokeWidth="3" d="M22 24a6 6 0 1012 0 6 6 0 00-12 0z"/>
        <path stroke="currentColor" strokeWidth="3" d="M18 36.5A7.5 7.5 0 0125.5 29h5a7.5 7.5 0 017.5 7.5V38H18v-1.5z"/>
    </svg>
);


export const DebtorsIcon = ({ className = 'h-16 w-16 text-custom-teal-darker' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 64 64">
        <path stroke="currentColor" strokeWidth="3" d="M2 32s8-14 30-14 30 14 30 14-8 14-30 14S2 32 2 32z"/>
        <circle cx="32" cy="32" r="8" stroke="currentColor" strokeWidth="3"/>
        <path stroke="currentColor" strokeWidth="3" d="M50 44a10 10 0 00-18-6 10 10 0 00-18 6"/>
        <path stroke="currentColor" strokeWidth="3" d="M24 38a4 4 0 100-8 4 4 0 000 8zM40 38a4 4 0 100-8 4 4 0 000 8z"/>
    </svg>
);

// Icons for Asset Control Page
export const CubeIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7L12 3 4 7v10l8 4 8-4V7z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 7l8 4 8-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 21V11" />
    </svg>
);

export const AnalysisIcon = ({ className = 'h-12 w-12 text-custom-teal-dark' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path d="M16.5 16.5l2.5 2.5" />
        <path d="M19 11a8 8 0 11-16 0 8 8 0 0116 0z" />
        <path d="M15 3.86a11.93 11.93 0 010 14.28m-10.14-.14a11.93 11.93 0 010-14.28" />
        <animateTransform attributeName="transform" type="rotate" from="0 11 11" to="360 11 11" dur="10s" repeatCount="indefinite" />
    </svg>
);

export const PlusIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
    </svg>
);

export const MinusIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 12H4" />
    </svg>
);

// Icons for Individual Analysis Page
export const OpenBoxIcon = ({ className = 'h-20 w-20 text-custom-teal' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 7.5L3 6m16.5 1.5L21 6M12 11L3 6m9 5l9-5" />
    </svg>
);

export const HeartWithPlusIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M4.318 6.318a4.5 4.5 0 016.364 0L12 7.5l1.318-1.182a4.5 4.5 0 116.364 6.364L12 21l-7.682-7.318a4.5 4.5 0 010-6.364z" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M15 10h-3m0-3v6" />
    </svg>
);

export const ChartIcon = ({ className = 'h-6 w-6' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
        <path strokeLinecap="round" strokeLinejoin="round" d="M16 8v8m-4-5v5m-4-2v2M4 20h16" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M4 4h16v12H4z" />
    </svg>
);

export const ReturnIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 14l-4-4 4-4" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M5 10h11a4 4 0 014 4v1" />
    </svg>
);

export const AboutLogoHandIcon = () => (
    <svg width="150" height="150" viewBox="0 0 64 64" xmlns="http://www.w3.org/2000/svg" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" >
        <g fill="#e0f2f1" stroke="#374151">
            <path d="M41.74 21.75V10.19c0-2.13-1.73-3.86-3.86-3.86h-2.1c-2.13 0-3.86 1.73-3.86 3.86v15.42" />
            <path d="M31.92 25.61h4.28c2.13 0 3.86 1.73 3.86 3.86v2.1c0 2.13-1.73 3.86-3.86 3.86h-4.28z" />
            <path d="M31.92 35.43V53.8c0 2.13-1.73 3.86-3.86 3.86h-8.56c-2.13 0-3.86-1.73-3.86-3.86V43c0-2.13 1.73-3.86 3.86-3.86h4.28" />
            <path d="M27.64 30.09v4.28" />
        </g>
        <g stroke="#374151">
            <path d="M20.22 39.21h8.56" />
            <path d="M20.22 45.01h8.56" />
            <path d="M20.22 50.81h8.56" />
        </g>
    </svg>
);

// Icons for Add Page
export const AddNewTraineeIcon = ({ className = "h-20 w-20" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#E0F2F1"/>
        <path d="M32 28C35.3137 28 38 25.3137 38 22C38 18.6863 35.3137 16 32 16C28.6863 16 26 18.6863 26 22C26 25.3137 28.6863 28 32 28Z" fill="#00897B"/>
        <path d="M42 48H22C22 42.4772 26.4772 38 32 38C37.5228 38 42 42.4772 42 48Z" fill="#00897B"/>
        <circle cx="44" cy="44" r="8" fill="#4CAF50"/>
        <path d="M44 40V48M40 44H48" stroke="white" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const ExistingTraineeIcon = ({ className = "h-20 w-20" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#E0F2F1"/>
        <path d="M32 28C35.3137 28 38 25.3137 38 22C38 18.6863 35.3137 16 32 16C28.6863 16 26 18.6863 26 22C26 25.3137 28.6863 28 32 28Z" fill="#00897B"/>
        <path d="M42 48H22C22 42.4772 26.4772 38 32 38C37.5228 38 42 42.4772 42 48Z" fill="#00897B"/>
        <circle cx="44" cy="44" r="8" fill="#2196F3"/>
        <path d="M40 44L43 47L48 41" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>
);

export const MoneyInIcon = ({ className = "h-20 w-20" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#E0F2F1"/>
        <path d="M46 22H18C16.8954 22 16 22.8954 16 24V40C16 41.1046 16.8954 42 18 42H46C47.1046 42 48 41.1046 48 40V24C48 22.8954 47.1046 22 46 22Z" fill="#00897B"/>
        <circle cx="32" cy="32" r="6" fill="#FBBF24"/>
        <path d="M32 29V35" stroke="#F59E0B" strokeWidth="2"/>
        <path d="M30 30C30.7273 29 32 28 32 28C32 28 33.2727 29 34 30" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 34C30.7273 35 32 36 32 36C32 36 33.2727 35 34 34" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 18L32 26L40 18" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 26V18" stroke="#4CAF50" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

export const MoneyOutIcon = ({ className = "h-20 w-20" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#E0F2F1"/>
        <path d="M46 30H18C16.8954 30 16 30.8954 16 32V48C16 49.1046 16.8954 50 18 50H46C47.1046 50 48 49.1046 48 48V32C48 30.8954 47.1046 30 46 30Z" fill="#00897B"/>
        <circle cx="32" cy="40" r="6" fill="#FBBF24"/>
        <path d="M32 37V43" stroke="#F59E0B" strokeWidth="2"/>
        <path d="M30 38C30.7273 37 32 36 32 36C32 36 33.2727 37 34 38" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M30 42C30.7273 43 32 44 32 44C32 44 33.2727 43 34 42" stroke="#F59E0B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 26L32 18L40 26" stroke="#F44336" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
        <path d="M32 18V26" stroke="#F44336" strokeWidth="3" strokeLinecap="round"/>
    </svg>
);

export const EnrollmentPaymentIcon = ({ className = "h-20 w-20" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#E0F2F1"/>
        <path d="M22 14H42C43.1046 14 44 14.8954 44 16V50L38 46L32 50L26 46L22 50V16C22 14.8954 22.8954 14 22 14Z" fill="#00897B"/>
        <path d="M35 31C35 32.6569 33.6569 34 32 34C30.3431 34 29 32.6569 29 31C29 29.3431 30.3431 28 32 28C33.6569 28 35 29.3431 35 31Z" fill="#FBBF24"/>
        <path d="M32 24V28M32 34V38" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34.5 28.5C34.5 27.1193 33.3807 26 32 26C30.6193 26 29.5 27.1193 29.5 28.5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34.5 33.5C34.5 34.8807 33.3807 36 32 36C30.6193 36 29.5 34.8807 29.5 33.5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const CertificatePaymentIcon = ({ className = "h-20 w-20" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#E0F2F1"/>
        <path d="M20 16H44V36H20V16Z" fill="#00897B"/>
        <path d="M24 36V48L32 44L40 48V36" fill="#65C7BA"/>
        <circle cx="32" cy="26" r="5" fill="#FBBF24"/>
        <path d="M32 23V29" stroke="#F59E0B" strokeWidth="1.5"/>
        <path d="M30.5 24C31.0596 23.3333 32 22.5 32 22.5C32 22.5 32.9404 23.3333 33.5 24" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M30.5 28C31.0596 28.6667 32 29.5 32 29.5C32 29.5 32.9404 28.6667 33.5 28" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const MonthlyPaymentIcon = ({ className = "h-20 w-20" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#E0F2F1"/>
        <rect x="16" y="18" width="32" height="28" rx="4" fill="#00897B"/>
        <rect x="16" y="24" width="32" height="4" fill="#4DB6AC"/>
        <path d="M24 16V20" stroke="#00897B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M40 16V20" stroke="#00897B" strokeWidth="2" strokeLinecap="round"/>
        <path d="M35 35C35 36.6569 33.6569 38 32 38C30.3431 38 29 36.6569 29 35C29 33.3431 30.3431 32 32 32C33.6569 32 35 33.3431 35 35Z" fill="#FBBF24"/>
        <path d="M32 31V32M32 38V39" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34.5 32.5C34.5 31.1193 33.3807 30 32 30C30.6193 30 29.5 31.1193 29.5 32.5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
        <path d="M34.5 37.5C34.5 38.8807 33.3807 40 32 40C30.6193 40 29.5 38.8807 29.5 37.5" stroke="#FBBF24" strokeWidth="2" strokeLinecap="round"/>
    </svg>
);

export const InvoicePaymentIcon = ({ className = "h-20 w-20" }: { className?: string }) => (
    <svg className={className} viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="32" fill="#E0F2F1"/>
        <rect x="18" y="14" width="28" height="36" rx="2" fill="#00897B"/>
        <path d="M24 22H40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 30H40" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <path d="M24 38H32" stroke="white" strokeWidth="2" strokeLinecap="round"/>
        <circle cx="38" cy="44" r="5" fill="#FBBF24"/>
        <path d="M38 42V46" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M39.5 42.5C39.5 41.6716 38.8284 41 38 41C37.1716 41 36.5 41.6716 36.5 42.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
        <path d="M39.5 45.5C39.5 46.3284 38.8284 47 38 47C37.1716 47 36.5 46.3284 36.5 45.5" stroke="#F59E0B" strokeWidth="1.5" strokeLinecap="round"/>
    </svg>
);

export const CameraIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 13a3 3 0 11-6 0 3 3 0 016 0z" />
    </svg>
);

export const UserIcon = ({ className = "h-5 w-5 text-gray-400" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
    </svg>
);

export const EyeIcon = ({ className = "h-5 w-5 text-gray-400" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
    </svg>
);

export const EyeOffIcon = ({ className = "h-5 w-5 text-gray-400" }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.542-7 .946-2.822 3.19-5.115 5.86-6.142M19.338 19.338A9.95 9.95 0 0021.542 12c-1.274-4.057-5.064-7-9.542-7-1.045 0-2.058.198-3 .562M3 3l18 18" />
    </svg>
);

export const PaperPlaneIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);

export const MinimizeIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M20 12H4" />
    </svg>
);

export const MaximizeIcon = ({ className = 'h-4 w-4' }: { className?: string }) => (
    <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M4 12h16M12 4v16" />
    </svg>
);

export const ChatBubbleIcon = ({ className = 'h-5 w-5' }: { className?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" className={className} fill="none" viewBox="0 0 24 24" stroke="currentColor">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
  </svg>
);