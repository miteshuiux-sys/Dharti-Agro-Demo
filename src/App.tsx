import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { MetricsBanner } from './components/MetricsBanner';
import { AboutSection } from './components/AboutSection';
import { PrecisionFleet } from './components/PrecisionFleet';
import { FactoryShowcase } from './components/FactoryShowcase';
import { StorySection } from './components/StorySection';
import { TestimonialsSection } from './components/TestimonialsSection';
import { PartnersSection } from './components/PartnersSection';
import { IndustrialGallery } from './components/IndustrialGallery';
import { CtaBanner } from './components/CtaBanner';
import { FloatingActions } from './components/FloatingActions';
import { Footer } from './components/Footer';

// Modals
import { ProductDetailModal } from './components/modals/ProductDetailModal';
import { QuoteModal } from './components/modals/QuoteModal';
import { ConsultationModal } from './components/modals/ConsultationModal';
import { DealerLocatorModal } from './components/modals/DealerLocatorModal';
import { StoryModal } from './components/modals/StoryModal';
import { LightboxModal } from './components/modals/LightboxModal';
import { SupportModal } from './components/modals/SupportModal';

import { PRODUCTS, TESTIMONIALS, GALLERY_ITEMS } from './data';
import { Product } from './types';

export default function App() {
  const [activeTab, setActiveTab] = useState('Manufacturing');
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Modals state
  const [selectedProductForDetail, setSelectedProductForDetail] = useState<Product | null>(null);
  const [isQuoteModalOpen, setIsQuoteModalOpen] = useState(false);
  const [quoteProduct, setQuoteProduct] = useState<Product | null>(null);
  const [isConsultationModalOpen, setIsConsultationModalOpen] = useState(false);
  const [isDealerLocatorOpen, setIsDealerLocatorOpen] = useState(false);
  const [isStoryModalOpen, setIsStoryModalOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);
  const [supportModalType, setSupportModalType] = useState<'support' | 'iso' | 'privacy' | 'terms' | null>(null);

  const handleOpenQuote = (product?: Product | null) => {
    setQuoteProduct(product || null);
    setIsQuoteModalOpen(true);
  };

  const handleSelectProductCategory = (category: Product['category']) => {
    setSelectedCategory(category);
    const el = document.getElementById('precision-fleet');
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleLightboxNext = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => ((prev! + 1) % GALLERY_ITEMS.length));
  };

  const handleLightboxPrev = () => {
    if (lightboxIndex === null) return;
    setLightboxIndex((prev) => (prev! === 0 ? GALLERY_ITEMS.length - 1 : prev! - 1));
  };

  return (
    <div className="min-h-screen bg-[#f9f9ff] text-[#181c22] font-sans antialiased selection:bg-[#8efb87] selection:text-[#00530f]">
      {/* Top Main Navigation */}
      <Navbar
        activeTab={activeTab}
        onSelectTab={setActiveTab}
        onRequestQuote={() => handleOpenQuote(null)}
        onSelectProductCategory={handleSelectProductCategory}
      />

      <main>
        {/* Hero Section */}
        <HeroSection
          onExploreProducts={() => {
            const el = document.getElementById('precision-fleet');
            if (el) el.scrollIntoView({ behavior: 'smooth' });
          }}
          onRequestQuote={() => handleOpenQuote(null)}
        />

        {/* Indigo & Bright Green Metrics Strip */}
        <MetricsBanner />

        {/* Precision Fleet / Product Showcase Carousel */}
        <PrecisionFleet
          products={PRODUCTS}
          selectedCategory={selectedCategory}
          onSelectCategory={setSelectedCategory}
          onViewProductDetails={(product) => setSelectedProductForDetail(product)}
          onGetQuote={(product) => handleOpenQuote(product)}
        />

        {/* Himatnagar Facility Bento Grid */}
        <FactoryShowcase />

        {/* About Section */}
        <AboutSection onExploreStory={() => setIsStoryModalOpen(true)} />

        {/* Real-world Field Story Section */}
        <StorySection />

        {/* Testimonials from Indian Farmers */}
        <TestimonialsSection testimonials={TESTIMONIALS} />

        {/* Industrial Visual Gallery */}
        <IndustrialGallery onOpenLightbox={(idx) => setLightboxIndex(idx)} />

        {/* Trusted Partners / Tractor Compatibility */}
        <PartnersSection />

        {/* Call to Action Banner */}
        <CtaBanner
          onRequestConsultation={() => setIsConsultationModalOpen(true)}
          onFindDealer={() => setIsDealerLocatorOpen(true)}
        />
      </main>

      {/* Footer */}
      <Footer
        onOpenModal={(type) => setSupportModalType(type)}
        onSelectCategory={handleSelectProductCategory}
        onOpenStory={() => setIsStoryModalOpen(true)}
        onOpenDealerLocator={() => setIsDealerLocatorOpen(true)}
      />

      {/* Floating Call & WhatsApp Buttons */}
      <FloatingActions />

      {/* Interactive Modals */}
      <ProductDetailModal
        product={selectedProductForDetail}
        onClose={() => setSelectedProductForDetail(null)}
        onOpenQuote={(product) => handleOpenQuote(product)}
      />

      <QuoteModal
        isOpen={isQuoteModalOpen}
        onClose={() => setIsQuoteModalOpen(false)}
        initialProduct={quoteProduct}
      />

      <ConsultationModal
        isOpen={isConsultationModalOpen}
        onClose={() => setIsConsultationModalOpen(false)}
      />

      <DealerLocatorModal
        isOpen={isDealerLocatorOpen}
        onClose={() => setIsDealerLocatorOpen(false)}
      />

      <StoryModal
        isOpen={isStoryModalOpen}
        onClose={() => setIsStoryModalOpen(false)}
      />

      <LightboxModal
        items={GALLERY_ITEMS}
        currentIndex={lightboxIndex}
        onClose={() => setLightboxIndex(null)}
        onNext={handleLightboxNext}
        onPrev={handleLightboxPrev}
      />

      <SupportModal
        type={supportModalType}
        onClose={() => setSupportModalType(null)}
      />
    </div>
  );
}
