export interface Event {
    eventAccount: string;
    eventName: string;
    participants: { name: string; id: string }[];
    eventStart: number;
    estimatedEnd: number;
    category: string;
    categoryTitle: string;
    eventGroup: string;
    eventGroupTitle: string;
    displayPriority: number;
}
  
const SkeletonLoader: React.FC = () => (
    <div className="animate-pulse bg-gray-700 rounded-md p-4">
      <div className="mb-2 h-6 bg-gray-600 rounded"></div>
      <div className="mb-2 h-6 bg-gray-600 rounded"></div>
      <div className="mb-2 h-6 bg-gray-600 rounded"></div>
      <div className="mb-2 h-6 bg-gray-600 rounded"></div>
      <div className="mb-2 h-6 bg-gray-600 rounded"></div>
    </div>
);

export type {Event as EventType};
export default SkeletonLoader;
