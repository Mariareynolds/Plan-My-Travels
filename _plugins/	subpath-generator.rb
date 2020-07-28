module Jekyll

    class SiteSubpath < Generator
        safe true
        priority :low

        def generate(site)
            #  check environment
            environment = ENV['JEKYLL_ENV']
            puts "\nGenerating site for #{environment}"

            pages_to_delete = []
            puts "Remove pages that don't belong under this subpath"
            site.pages.each do |page|
                if page.extname == '.html' or page.extname == '.md' or page.extname == '.markdown'  then
                    if page.data['subpath'] == nil then
                        if environment != 'production' then
                            pages_to_delete << page
                        end
                    elsif page.data['subpath'] != environment  then
                        pages_to_delete << page
                    end
                end
            end
            pages_to_delete.each do |page|
                site.pages.delete(page)
            end

            items_to_delete = []
            puts "Remove collection items that don't belong under this subpath"
            site.collections.each do |collectionName, collectionData|
                if collectionData.metadata['output'] != false then
                    collectionData.docs.each do |item|
                        if item.data['subpath'] == nil then
                            if environment != 'production' then
                                items_to_delete << item
                            end
                        elsif item.data['subpath'] != environment  then
                            items_to_delete << item
                        end
                    end
                    items_to_delete.each do |item|
                        site.collections[collectionName].docs.delete(item)
                    end

                end
            end


        end

    end

end
