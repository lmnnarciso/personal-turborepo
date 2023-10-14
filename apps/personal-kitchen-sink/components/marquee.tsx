export const Marquee = () => {
  return (
    <div className=" flex w-full select-none gap-[var(--marquee-gap)] overflow-hidden px-48">
      <ul className="flex min-w-full shrink-0 animate-scroll-marquee justify-around gap-[var(--marquee-gap)]  ">
        <li>Leandro Miguel Narciso</li>
        <li>Frontend Developer</li>
        <li>Leandro Miguel Narciso</li>
        <li>Frontend Developer</li>
      </ul>
      {/* <!-- Mirrors the content above --> */}
      <ul
        className="flex min-w-full shrink-0 animate-scroll-marquee justify-around gap-[var(--marquee-gap)]"
        aria-hidden="true"
      >
        <li>Leandro Miguel Narciso</li>
        <li>Frontend Developer</li>
        <li>Leandro Miguel Narciso</li>
        <li>Frontend Developer</li>
      </ul>
    </div>
  )
}
