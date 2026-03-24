import Sidebar from "../src/Sidebar";
import Navbar from "../src/Navbar";
import Card from "../src/Card";
import LineChartFinance from "../src/LineChartFinance";
import BarChartFinance from "../src/BarChartFinance";
import PieChartFinance from "../src/PieChartFinance";

export default function Dashboard() {
  return (
    <div className="flex">

      {/* Sidebar */}
      <Sidebar />

      {/* Main */}
      <div className="flex-1 bg-gray-100 min-h-screen">

        <Navbar />

        <div className="p-6">

          {/* Cards */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <Card title = "Solde" amount={250000} />
            <Card title ="Revenus" amount={600000} />
            <Card title ="Dépenses" amount={350000} />
          </div>

          {/* Charts */}
          <div className="grid grid-cols-2 gap-4">
            <LineChartFinance />
            <BarChartFinance />
            <PieChartFinance />
          </div>

        </div>
      </div>
    </div>
  );
}