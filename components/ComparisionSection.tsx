import { Compare } from "@/components/ui/compare";

export function ComparisionSection() {
  return (
    <div className="p-8 border rounded-3xl dark:bg-neutral-900 bg-neutral-100 border-neutral-200 dark:border-neutral-800">
      <h2 className="text-2xl font-bold text-center mb-6 text-gray-800 dark:text-white">
        Compare Our Smart Energy Meter with Traditional Meter
      </h2>
      {/* Comparison Images */}
      <Compare
        firstImage="https://your-image-url.com/your-smart-meter-image.jpg"
        secondImage="https://your-image-url.com/traditional-meter-image.jpg"
        firstImageClassName="object-cover object-center"
        secondImageClassname="object-cover object-center"
        className="h-[250px] w-[200px] md:h-[500px] md:w-[500px] mx-auto mb-6"
        slideMode="hover"
      />
      {/* Comparison List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
        <div className="bg-white p-6 rounded-xl shadow-md dark:bg-neutral-800 dark:text-white">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Smart Energy Meter Features
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>Real-time data tracking</li>
            <li>Remote monitoring via mobile app</li>
            <li>Accurate energy consumption reporting</li>
            <li>Energy optimization and cost saving suggestions</li>
            <li>Smart notifications and alerts</li>
            <li>Seamless integration with smart home devices</li>
          </ul>
        </div>
        <div className="bg-white p-6 rounded-xl shadow-md dark:bg-neutral-800 dark:text-white">
          <h3 className="text-xl font-semibold mb-4 text-gray-800 dark:text-white">
            Traditional Meter Features
          </h3>
          <ul className="space-y-3 text-gray-700 dark:text-gray-300">
            <li>Manual meter readings</li>
            <li>Limited or no data tracking</li>
            <li>Requires technician visits for maintenance</li>
            <li>No real-time reporting or alerts</li>
            <li>Basic functionality with limited energy analysis</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
