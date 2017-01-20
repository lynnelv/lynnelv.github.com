# Jekyll Ideal Image Slider
# Author: https://github.com/xHN35RQ
# Description: Liquid tag plugin to create image sliders using Ideal Image Slider
# Documentation: https://github.com/xHN35RQ/jekyll-ideal-image-slider#readme
# Source: https://github.com/xHN35RQ/jekyll-ideal-image-slider
#
# Syntax:
#
#  {% slider height [captions] %}
#  {% endslider %}
#
# Usage:
#
#  Example Input:
#  {% slider 700 captions %}
#    ![alt text 1](/img/image1.jpg)
#    [![alt text 2](/img/image2.jpg)](/page/url)
#    [![alt text 3](/img/image3.jpg)](http://example.com)
#  {% endslider %}
#
#  Example Output:
#  <div id="slider">
#    <img src="/img/image1.jpg" alt="alt text 1">
#    <a href="/page/url"><img src="/img/image2.jpg" alt="alt text 2"></a>
#    <a href="http://example.com"><img src="/img/image3.jpg" alt="alt text 3"></a>
#  </div>

module Jekyll
  class SliderTag < Liquid::Block
    alias_method :render_block, :render
    @slider_captions = nil
    @slider_height = nil
    Captions = /captions/i
    Height = /(auto|\d+:\d+)/i
    Height_Numeric = /(\d+)/i

    def initialize(name, markup, tokens)
      if markup =~ Height
        @slider_height = "\'#{$1}\'"
      elsif markup =~ Height_Numeric
        @slider_height = "#{$1}"
      else
        @slider_height = "\'auto\'"
      end
      if markup =~ Captions
        @slider_captions = "true"
      end
      super
    end

    def render(context)
      context.environments.first['page']['slider_active'] = true
      if @slider_height
        # generate slider id
        slider_id = "slider_" + ("a".."z").to_a.shuffle[0,5].join
        # call the default markdown renderer
        site = context.registers[:site]
        converter =
        if site.respond_to?(:find_converter_instance)
          site.find_converter_instance(Jekyll::Converters::Markdown)
        else
          site.getConverterImpl(Jekyll::Converters::Markdown)
        end
        # render the slider script
        slider_script = "<script>"
        slider_script += "var slider = new IdealImageSlider.Slider({"
        slider_script += "selector:\'\##{slider_id}\',"
        slider_script += "height:#{@slider_height}"
        slider_script += "});"
        slider_script += "slider.addCaptions();" if @slider_captions
        slider_script += "slider.start();"
        slider_script += "</script>"
        slider_array = context.environments.first['site']['slider_array']
        slider_array << slider_script
        context.environments.first['page']['slider_scripts'] = slider_array
        # render the markdown, then remove all <p></p> tags from the html
        output = converter.convert(render_block(context)).gsub(/<\/?p>/, '')
        # render the slider
        slider = "<div class=\"iis-slider\" id=\"#{slider_id}\">#{output}</div>"
        slider
      else
        "Error processing input, expected syntax: {% slider height [captions] %}"
      end
    end
  end
end

Liquid::Template.register_tag('slider', Jekyll::SliderTag)