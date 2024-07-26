import { Topbar } from '../components/topbar'

export function Home() {
  return (
    <div className="w-full space-y-16">
      <Topbar />

      <section className="bg-bg-sm md:bg-bg-large mx-16 rounded-2xl bg-cover bg-no-repeat md:bg-center">
        <div className="flex flex-col justify-between gap-12 px-16 pb-14 pt-6 md:flex-row">
          <div className="space-y-8 md:w-5/12">
            <div className="font-montaga text-6xl leading-none">
              <h1 className="text-wrap md:text-nowrap">
                Bem vindo a
                <br />
                <span>Casa 1307</span>
              </h1>
            </div>
            <div className="space-y-5 text-wrap text-justify">
              <p>
                A plataforma completa para empreendedores que querem dominar
                seus negócios.
              </p>
              <p>
                Um ecossistema completo de ferramentas e serviços. Tudo com
                atendimento especializado e humano para auxiliar em cada etapa
                da sua jornada empreendedora.
              </p>
            </div>
          </div>
          <button className="h-fit self-end text-nowrap rounded-xl bg-mint-500 px-14 py-5 text-center font-medium text-black shadow-shadowButton transition-all hover:bg-mint-500/80">
            Estou interessado
          </button>
        </div>
      </section>
    </div>
  )
}
