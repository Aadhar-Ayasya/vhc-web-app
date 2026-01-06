import InfoCard from "./InfoCard";
import ConnectCard from "./ConnectCard";
import ProfileSections from "./ProfileSections";
import data from "../data.json";
import { Therapist } from "../page";

function getData(id: string) {
  const therapists: Therapist[] = data.therapists;
  const currentTherapist = therapists.filter((el) => {
    return el.id == id;
  });
  return currentTherapist[0] as Therapist;
}

async function Page(props: PageProps<"/therapist/[slug]">) {
  const param = (await props.params).slug;
  const therapistData = getData(param);
  return (
    <div className="w-full  min-h-screen m-0 p-0">
      <div className="max-w-5xl m-auto mt-2 flex justify-center gap-10 ">
        <h1>{param}</h1>
        <InfoCard Data={therapistData} />

        <ConnectCard />
      </div>

      <div className="w-full mt-8 flex justify-center">
        <ProfileSections Data={therapistData} />
      </div>
    </div>
  );
}

export default Page;
