'use client';

import { useState } from 'react';
import { X } from 'lucide-react';
import { ProtectedWhatsAppLink } from './ContactInfo';

export default function FloatingWhatsApp() {
  const [tooltipVisible, setTooltipVisible] = useState(false);
  const [dismissed, setDismissed] = useState(false);

  return (
    <div
      className="fixed bottom-24 lg:bottom-6 right-4 lg:right-6 flex flex-col items-end gap-3"
      style={{ zIndex: 9999 }}
    >
      {/* Tooltip card */}
      {tooltipVisible && !dismissed && (
        <div className="bg-white rounded-xl shadow-xl border border-slate-100 p-4 flex items-start gap-3 max-w-[220px]">
          <div className="w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0" style={{ backgroundColor: '#25D366' }}>
            <WhatsAppIcon className="w-4 h-4 text-white" />
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-xs font-semibold text-slate-800 leading-tight mb-1">GulfMarks</p>
            <p className="text-xs text-slate-500 leading-tight">Chat with us on WhatsApp</p>
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              setDismissed(true);
              setTooltipVisible(false);
            }}
            className="text-slate-400 hover:text-slate-600 flex-shrink-0"
            aria-label="Close"
          >
            <X size={12} />
          </button>
        </div>
      )}

      {/* WhatsApp button */}
      <ProtectedWhatsAppLink
        message="Hello GulfMarks, I'm interested in your services"
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-200 whatsapp-pulse"
        style={{ backgroundColor: '#25D366' }}
        onMouseEnter={() => !dismissed && setTooltipVisible(true)}
        onMouseLeave={() => setTooltipVisible(false)}
      >
        <WhatsAppIcon className="w-7 h-7 text-white" />
      </ProtectedWhatsAppLink>
    </div>
  );
}

function WhatsAppIcon({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
      <path d="M12.004 2.003C6.483 2.003 2 6.487 2 12.008c0 1.762.457 3.43 1.257 4.883L2 22l5.247-1.377C8.659 21.471 10.3 22 12.004 22c5.521 0 10.004-4.484 10.004-10.005 0-5.52-4.483-9.992-10.004-9.992zm0 18.304c-1.571 0-3.11-.425-4.445-1.225l-.319-.189-3.112.816.831-3.03-.207-.31C3.89 15.157 3.396 13.6 3.396 12.008c0-4.745 3.862-8.607 8.608-8.607 4.745 0 8.607 3.862 8.607 8.607 0 4.746-3.862 8.299-8.607 8.299z" />
    </svg>
  );
}
