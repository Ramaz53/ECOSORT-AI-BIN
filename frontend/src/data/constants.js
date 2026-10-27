import { UserRound, ScanLine, Cog, Split, Trash2, LayoutDashboard, ArrowDownToLine, Radio, Camera, BrainCircuit } from "lucide-react";

export const CLASS_NAMES = ["Organic", "Inorganic"];

// Tailwind classes literal strings mein hone chahiye (dynamic string banane se purge ho jati hain)
export const CLASSES = {
  Organic: { emoji: "🍌", hex: "#16a34a", chip: "bg-green-600", soft: "bg-green-50 dark:bg-green-500/10 border-green-200 dark:border-green-500/25", text: "text-green-700 dark:text-green-400", bar: "bg-green-600", box: "border-green-500 bg-green-500/20", cmd: "O", angle: 45 },
  Inorganic: { emoji: "🍾", hex: "#2563eb", chip: "bg-blue-600", soft: "bg-blue-50 dark:bg-blue-500/10 border-blue-200 dark:border-blue-500/25", text: "text-blue-700 dark:text-blue-400", bar: "bg-blue-600", box: "border-blue-500 bg-blue-500/20", cmd: "I", angle: 135 },
};

// Hardware flow chart (Design.docx) ke mutabiq
export const STAGES = [
  { icon: ArrowDownToLine, title: "Waste Input", zone: "Hopper", desc: "Mixed waste goes into the hopper." },
  { icon: Radio, title: "IR Detection", zone: "Sensor zone", desc: "The IR sensor spots an item on the belt." },
  { icon: Camera, title: "Camera Capture", zone: "Camera zone", desc: "The camera takes a picture of the item." },
  { icon: BrainCircuit, title: "AI Classification", zone: "AI inference", desc: "YOLO labels it Organic or Inorganic." },
  { icon: Split, title: "Diverter Moves", zone: "Diverter", desc: "A servo turns toward the correct bin." },
  { icon: Trash2, title: "Sorted in Bin", zone: "Bin", desc: "The waste drops into its bin." },
];

export const MODULES = [
  { title: "User Management", icon: UserRound, items: ["Login", "Sign Up", "User Profile", "Logout"] },
  { title: "AI Detection & Classification", icon: ScanLine, items: ["Camera Input", "Waste Detection", "Waste Classification", "Confidence Score"] },
  { title: "Conveyor & Motor Control", icon: Cog, items: ["Conveyor Start/Stop", "Motor Speed Control", "Item Movement Control"] },
  { title: "Automatic Waste Sorting", icon: Split, items: ["Sorting Decision", "Diverter Control", "Waste Direction Control"] },
  { title: "Collection & Monitoring", icon: Trash2, items: ["Organic Waste Bin", "Inorganic Waste Bin", "Bin Fill-Level Monitoring"] },
  { title: "Dashboard", icon: LayoutDashboard, items: ["System Status", "Waste Category Percentages", "Total Waste Weight", "Recent Activity"] },
];

export const HARDWARE = [
  ["Camera", "5MP CSI / USB 1080p camera"],
  ["IR Sensor", "LM393 IR object sensor"],
  ["Processing Unit", "Raspberry Pi 5 running YOLO"],
  ["Controller", "Arduino UNO (servo + motor control)"],
  ["Conveyor Motor", "12V DC geared motor, 30-60 RPM"],
  ["Motor Driver", "L298N, PWM speed control"],
  ["Diverter", "MG996R metal gear servo"],
  ["Display", "7-inch HDMI LCD"],
];

// Yahan apni team ki asli details likh dein
export const DEVELOPERS = [
  { role: "Project Manager", name: "Your Name", email: "pm@example.com", desc: "Planning, coordination, documentation and project defence." },
  { role: "Front End Developer", name: "Your Name", email: "frontend@example.com", desc: "React dashboard, UI/UX design and 3D visuals." },
  { role: "Back End Developer", name: "Your Name", email: "backend@example.com", desc: "Node.js APIs, MongoDB, authentication and hardware communication." },
  { role: "AI & Hardware Engineer", name: "Your Name", email: "hardware@example.com", desc: "YOLO model training, Arduino, sensors, motors and diverter." },
];

export const WEEK = [
  { d: "Oct 9", Organic: 14, Inorganic: 16 }, { d: "Oct 10", Organic: 17, Inorganic: 21 },
  { d: "Oct 11", Organic: 12, Inorganic: 20 }, { d: "Oct 12", Organic: 18, Inorganic: 21 },
  { d: "Oct 13", Organic: 15, Inorganic: 22 }, { d: "Oct 14", Organic: 16, Inorganic: 24 },
  { d: "Oct 15", Organic: 12, Inorganic: 20 },
];
