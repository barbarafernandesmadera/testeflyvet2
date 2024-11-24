import React from 'react';
import '../styles/pages/about.scss'; // Estilos para a seção sobre
import SobreImage from '../assets/aboutImage.jpg'; // Imagem para ilustrar a seção

const Sobre = () => {
    return (
        <section id="sobre" className="sobre">
            <div className="sobre-container">
                <div className="content">
                    <h2>Sobre a Clínica</h2>
                    <p>
                        A <strong>Vida Animal Clínica Veterinária</strong> foi fundada em 2018 com o objetivo inicial de ser um petshop voltado ao bem-estar e cuidados essenciais dos nossos amigos de quatro patas. Desde o início, nosso compromisso foi proporcionar a melhor qualidade de vida para os pets, com serviços que atendem às suas necessidades mais básicas e essenciais.
                    </p>
                    <p>
                        Em 2020, percebendo a crescente demanda por serviços veterinários de qualidade, a clínica decidiu mudar seu foco e migrou para o ramo de saúde animal. Investimos em infraestrutura moderna, equipamentos de ponta e uma equipe de profissionais altamente capacitados, garantindo que nossos pacientes recebam o melhor atendimento possível.
                    </p>
                    <p>
                        Nosso compromisso com a comunidade é o que nos diferencia. Buscamos oferecer um atendimento acolhedor e acessível, sempre com o objetivo de fortalecer o vínculo entre tutores e seus animais. Trabalhamos com transparência, confiança e qualidade, garantindo que cada pet seja tratado com carinho e respeito.
                    </p>
                    <p>
                        Se você busca um atendimento de excelência para o seu pet, entre em contato conosco! Estamos prontos para cuidar do seu amigo com o máximo de dedicação.
                    </p>
                    {/* Botão do WhatsApp */}
                    <a href="https://wa.me/5511991407988" className="whatsapp-button">
                        <button>Entrar em Contato pelo WhatsApp</button>
                    </a>
                </div>
                <div className="image">
                    <img src={SobreImage} alt="Sobre a clínica" />
                </div>
            </div>
        </section>
    );
};

export default Sobre;
