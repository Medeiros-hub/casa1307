import { BadgePlus, Crown, LayoutDashboard, Star } from 'lucide-react'

import { DescriptionCard } from '../components/description-card'
import { Topbar } from '../components/topbar'

export function Home() {
  return (
    <div className="w-full space-y-20">
      <Topbar />

      <section className="mx-16 rounded-2xl bg-bg-sm bg-cover bg-no-repeat md:bg-bg-large md:bg-center">
        <div className="flex flex-col justify-between gap-12 px-8 pb-7 pt-3 md:flex-row md:px-16 md:pb-14 md:pt-6">
          <div className="space-y-8 md:w-5/12">
            <div className="font-montaga text-4xl leading-none md:text-6xl">
              <h1 className="text-wrap md:text-nowrap">
                Bem vindo a
                <br />
                <span>Casa 1307</span>
              </h1>
            </div>
            <div className="space-y-5 text-wrap text-justify text-sm md:text-base">
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
          <button className="rounded-xl bg-mint-500 px-7 py-5 text-center font-medium leading-none text-black shadow-shadowButton transition-all hover:bg-mint-500/80 sm:self-end md:px-14">
            Estou interessado
          </button>
        </div>
      </section>

      <section className="mx-16 flex justify-between gap-28">
        <div className="max-w-[41.5rem] space-y-14">
          <h1 className="text-3xl md:text-5xl">
            Somos um lar acolhedor para o sucesso da sua empresa!
          </h1>
          <div className="flex flex-wrap gap-10">
            <DescriptionCard
              Icon={Star}
              title="Delicada"
              description="Com um toque sutil e elegante, oferece uma experiência planejada com atenção as necessidades dos clientes."
            />
            <DescriptionCard
              Icon={BadgePlus}
              title="Moderna"
              description="É sinônimo de modernidade, oferecendo um espaço que combina inovação e estilo contemporâneo."
            />
            <DescriptionCard
              Icon={LayoutDashboard}
              title="Digital"
              description="A Casa1307 está sempre conectada, proporcionando uma experiência digital avançada e acessível."
            />
            <DescriptionCard
              Icon={Crown}
              title="Nobre"
              description="Nos destacmos pela sua excelência e sofisticação, proporcionando um ambiente de prestígio para todos os seus clientes."
            />
          </div>
        </div>
        <div className="hidden max-w-[31.25rem] items-center justify-center rounded-2xl bg-bg-sm bg-cover bg-no-repeat px-20 lg:flex">
          <img
            src="/logo-white.svg"
            alt="logo Casa1307"
            className="size-[20.4375rem]"
          />
        </div>
      </section>

      <section className="mx-16 h-[40.625rem] self-center rounded-2xl bg-bg-sm bg-cover bg-no-repeat sm:bg-bg-xl"></section>
    </div>
  )
}
