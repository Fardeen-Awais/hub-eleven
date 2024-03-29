import { Separator } from "@/components/ui/separator";

interface AboutProjectsmProps {
  title: string;
  serviceprovided: Array<string>;
  techprovided: Array<string>;
}

export function AboutProject({ title, serviceprovided, techprovided }: AboutProjectsmProps) {
  return (
    <div className="border border-gray-400 text-black rounded-lg p-5 space-y-6 w-60">
      <div className="flex items-center space-x-3">
        <div className="text-2xl font-bold">{title}</div>
      </div>
      <Separator />
      <div>
        <h4 className="text-base font-semibold mb-2 text-cyan-800">Provided services</h4>
        <ul className="space-y-1">
          {serviceprovided.map((service, index) => (
            <li key={index}>{service}</li>
          ))}
        </ul>
      </div>
      <div>
        <h4 className="text-base font-semibold mb-2 text-cyan-800">Technology stack</h4>
        <ul className="space-y-1">
          {techprovided.map((tech, index) => (
            <li key={index}>{tech}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}