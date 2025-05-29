import { FiChevronRight } from 'react-icons/fi';

export default function FeatureBadge() {
  return (
    <div className="inline-flex items-center px-3 py-1 rounded-full border border-gray-200 bg-white text-sm font-medium shadow-sm">
      <span className="bg-[#6759ff] text-white px-2 py-0.5 rounded-full text-xs font-semibold mr-2">
        New
      </span>
      <span className="text-gray-800">2x faster AI responses</span>
      <FiChevronRight className="ml-1 text-gray-500 text-sm" />
    </div>
  );
}
