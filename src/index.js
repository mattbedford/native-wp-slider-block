import { registerBlockType } from '@wordpress/blocks';
import {
    InnerBlocks,
    InspectorControls
} from '@wordpress/block-editor';
import {
    PanelBody,
    ToggleControl,
    TextControl,
    RangeControl
} from '@wordpress/components';
import { useEffect } from '@wordpress/element';
import { v4 as uuidv4 } from 'uuid';

registerBlockType('devteam/native-wp-slider', {
    title: 'Native WP Slider',
    category: 'design',
    icon: 'images-alt2',
    supports: {
        html: false,
        reusable: false
    },
    attributes: {
        showNavigation: { type: 'boolean', default: true },
        showArrows: { type: 'boolean', default: true },
        autoplay: { type: 'boolean', default: false },
        loop: { type: 'boolean', default: false },
        slidesPerView: { type: 'number', default: 1 },
        sliderId: { type: 'string', default: '' }
    },
    edit: (props) => {
        const {
            attributes,
            setAttributes,
            className,
            isSelected
        } = props;

        const {
            showNavigation,
            showArrows,
            autoplay,
            loop,
            slidesPerView,
            sliderId
        } = attributes;

        // Assign a unique ID when first created
        useEffect(() => {
            if (!sliderId) {
                setAttributes({ sliderId: uuidv4() });
            }
        }, []);

        return (
            <>
                {isSelected && (
                    <InspectorControls>
                        <PanelBody title="Slider Settings" initialOpen={true}>
                            <ToggleControl
                                label="Show Navigation Dots"
                                checked={showNavigation}
                                onChange={(value) =>
                                    setAttributes({ showNavigation: value })
                                }
                            />
                            <ToggleControl
                                label="Show Arrows"
                                checked={showArrows}
                                onChange={(value) =>
                                    setAttributes({ showArrows: value })
                                }
                            />
                            <ToggleControl
                                label="Autoplay"
                                checked={autoplay}
                                onChange={(value) =>
                                    setAttributes({ autoplay: value })
                                }
                            />
                            <ToggleControl
                                label="Loop"
                                checked={loop}
                                onChange={(value) =>
                                    setAttributes({ loop: value })
                                }
                            />
                            <RangeControl
                                label="Slides Per View"
                                value={slidesPerView}
                                onChange={(value) =>
                                    setAttributes({ slidesPerView: value })
                                }
                                min={1}
                                max={5}
                            />
                        </PanelBody>
                    </InspectorControls>
                )}

                <div className={`${className} devteam-slider-editor`}>
                    <InnerBlocks
                        allowedBlocks={['core/group', 'core/paragraph', 'core/image']}
                        orientation="horizontal"
                    />
                </div>
            </>
        );
    },

    save: ({ attributes }) => {
        const {
            sliderId,
            showNavigation,
            showArrows,
            autoplay,
            loop,
            slidesPerView
        } = attributes;

        return (
            <div
                id={`swiper-${sliderId}`}
                className="swiper"
                data-show-navigation={showNavigation}
                data-show-arrows={showArrows}
                data-autoplay={autoplay}
                data-loop={loop}
                data-slides-per-view={slidesPerView}
            >
                <div className="swiper-wrapper">
                    <InnerBlocks.Content />
                </div>

                {/* Optional containers, always rendered, show/hide via CSS/JS */}
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        );
    }
});
