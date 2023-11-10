import { useEffect, useState } from "react";

import { usePathname, useRouter } from "next/navigation";

import { TAction } from "./type";
import useLocomotiveScrollRef from "../LocomotiveScrollProvider/useLocomotiveScrollRef";

export default function useNavigationRouting(handleAsideStates: React.Dispatch<TAction>) {
  const pathname = usePathname()

  const locomotiveScroll = useLocomotiveScrollRef();

  const router = useRouter()

  const [navigation, setNavigationValues] = useState([
    { title: "About", onClick: () => { locomotiveScroll?.scrollTo("#about") } },
    { title: "Projects", onClick: () => { locomotiveScroll?.scrollTo("#projects") } },
    { title: "Skills", onClick: () => { locomotiveScroll?.scrollTo("#skills") } },
    { title: "Contact", onClick: () => { locomotiveScroll?.scrollTo("#contact") } },
  ]);
  useEffect(() => {
    function handleRoutingTravels() {
      if (pathname.includes("/repository")) {
        setNavigationValues([{ title: "Home", onClick: () => { router.push("/home") } }])
      } else {
        setNavigationValues([
          { title: "About", onClick: () => { locomotiveScroll?.scrollTo("#about") } },
          { title: "Projects", onClick: () => { locomotiveScroll?.scrollTo("#projects") } },
          { title: "Skills", onClick: () => { locomotiveScroll?.scrollTo("#skills") } },
          { title: "Contact", onClick: () => { locomotiveScroll?.scrollTo("#contact") } },
        ])
      }
      handleAsideStates({ type: "set", payload: false })
    }

    handleRoutingTravels()
  }, [pathname, locomotiveScroll])

  return navigation
}