export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      {/* Left */}
      <div className="relative flex flex-col items-start justify-center overflow-hidden border-r border-white/10 bg-[url(../assets/bg-stars.svg)] bg-cover px-28 py-16">
        {/* Blur */}
        <div className="absolute right-0 top-1/2 h-[288px] w-[526px] -translate-y-1/2 translate-x-1/2 rounded-full bg-purple-700 opacity-50 blur-full" />

        {/* Stripe */}
        <div className="absolute bottom-0 right-2 top-0 w-2 bg-stripes" />
      </div>

      {/* Rigth */}
      <div className="flex flex-col bg-[url(../assets/bg-stars.svg)] bg-cover p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não registou nenhuma lembrança, começe a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}