import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import Link from 'next/link';
import { ArrowLeft } from 'lucide-react';
import { getSession } from '@/lib/services/auth.service';
import { listContactEnquiries } from '@/lib/services/contact.service';
import { updateContactEnquiryStatusAction } from '../actions';

const statuses = ['New', 'In Progress', 'Closed'];

function statusBadge(status: string) {
  const map: Record<string, string> = {
    New: 'bg-blue-100 text-blue-700',
    'In Progress': 'bg-yellow-100 text-yellow-700',
    Closed: 'bg-green-100 text-green-700',
  };
  return (
    <span className={`inline-block text-xs font-medium px-2 py-0.5 rounded ${map[status] ?? 'bg-gray-100 text-gray-600'}`}>
      {status}
    </span>
  );
}

function preview(message: string) {
  return message.length > 90 ? `${message.slice(0, 90)}...` : message;
}

export default async function ContactEnquiriesPage() {
  const cookieStore = await cookies();
  const sessionId = cookieStore.get('sid')?.value;
  if (!sessionId) redirect('/admin/login');
  const session = await getSession(sessionId).catch(() => null);
  if (!session) redirect('/api/auth/logout');

  const enquiries = await listContactEnquiries();
  const canEdit = session.role !== 'Viewer';

  return (
    <div className="max-w-6xl mx-auto space-y-6">
      <div>
        <Link href="/admin/contact" className="inline-flex items-center gap-1.5 text-sm text-gray-500 hover:text-gray-700 mb-4">
          <ArrowLeft className="w-4 h-4" />
          Back to Contact Management
        </Link>
        <div className="flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Contact Enquiries</h1>
            <p className="text-sm text-gray-500 mt-1">
              {enquiries.length} submitted enquir{enquiries.length === 1 ? 'y' : 'ies'}
            </p>
          </div>
        </div>
      </div>

      <div className="bg-white rounded-xl border border-gray-200 overflow-hidden">
        <table className="w-full text-sm">
          <thead className="bg-gray-50 border-b border-gray-200">
            <tr>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Full name</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Phone</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Type</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Message</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Status</th>
              <th className="text-left px-5 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Submitted</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100">
            {enquiries.map((enquiry) => {
              const action = updateContactEnquiryStatusAction.bind(null, enquiry.id);

              return (
                <tr key={enquiry.id} className="hover:bg-gray-50 transition-colors align-top">
                  <td className="px-5 py-3.5 font-medium text-gray-900 whitespace-nowrap">{enquiry.name}</td>
                  <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{enquiry.phone || '-'}</td>
                  <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{enquiry.email || '-'}</td>
                  <td className="px-5 py-3.5 text-gray-600 whitespace-nowrap">{enquiry.enquiryType}</td>
                  <td className="px-5 py-3.5 text-gray-600 max-w-xs">
                    <details>
                      <summary className="cursor-pointer list-none">{preview(enquiry.message)}</summary>
                      <p className="mt-2 whitespace-pre-wrap text-gray-700">{enquiry.message}</p>
                    </details>
                  </td>
                  <td className="px-5 py-3.5 min-w-44">
                    {canEdit ? (
                      <form action={action} className="flex items-center gap-2">
                        <select
                          name="status"
                          defaultValue={enquiry.status}
                          className="px-2 py-1.5 border border-gray-300 rounded-lg text-xs bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
                        >
                          {statuses.map((status) => (
                            <option key={status} value={status}>{status}</option>
                          ))}
                        </select>
                        <button type="submit" className="px-2.5 py-1.5 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-xs font-medium">
                          Update
                        </button>
                      </form>
                    ) : (
                      statusBadge(enquiry.status)
                    )}
                  </td>
                  <td className="px-5 py-3.5 text-gray-400 whitespace-nowrap">
                    {new Date(enquiry.createdAt).toLocaleDateString('en-GB', {
                      day: '2-digit', month: 'short', year: 'numeric',
                    })}
                  </td>
                </tr>
              );
            })}
            {enquiries.length === 0 && (
              <tr>
                <td colSpan={7} className="px-5 py-10 text-center text-gray-400 text-sm">
                  No contact enquiries have been submitted yet.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
